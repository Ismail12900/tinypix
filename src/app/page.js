"use client";

import { useState, useRef } from "react";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";

const FORMATS = [
  { id: "original", label: "Keep original" },
  { id: "image/jpeg", label: "JPG" },
  { id: "image/png", label: "PNG" },
  { id: "image/webp", label: "WebP" },
];

const SIZES = [
  { id: 0, label: "Original size" },
  { id: 1920, label: "1920px (Full HD)" },
  { id: 1280, label: "1280px (Web)" },
  { id: 800, label: "800px (Small)" },
];

export default function Home() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [quality, setQuality] = useState(70);
  const [format, setFormat] = useState("original");
  const [maxSize, setMaxSize] = useState(0);
  const [isCompressing, setIsCompressing] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = (newFiles) => {
    const images = Array.from(newFiles)
      .filter((f) => f.type.startsWith("image/"))
      .map((f) => ({
        original: f,
        compressed: null,
        preview: URL.createObjectURL(f),
      }));
    setFiles((prev) => [...prev, ...images]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const savings = (item) =>
    (100 - (item.compressed.size / item.original.size) * 100).toFixed(0);

  const grewBigger = (item) => item.compressed.size > item.original.size;

  const outputName = (item) => {
    const base = item.original.name.replace(/\.[^.]+$/, "");
    if (format === "image/jpeg") return "tinypix-" + base + ".jpg";
    if (format === "image/png") return "tinypix-" + base + ".png";
    if (format === "image/webp") return "tinypix-" + base + ".webp";
    return "tinypix-" + item.original.name;
  };

  const compressAll = async () => {
    setIsCompressing(true);
    const options = {
      initialQuality: quality / 100,
      maxSizeMB: 10,
      useWebWorker: true,
    };
    if (format !== "original") {
      options.fileType = format;
    }
    if (maxSize > 0) {
      options.maxWidthOrHeight = maxSize;
    }
    const results = [];
    for (const item of files) {
      try {
        const compressed = await imageCompression(item.original, options);
        results.push({ ...item, compressed });
      } catch {
        results.push(item);
      }
    }
    setFiles(results);
    setIsCompressing(false);
  };

  const download = (item) => {
    const url = URL.createObjectURL(item.compressed);
    const a = document.createElement("a");
    a.href = url;
    a.download = outputName(item);
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAllZip = async () => {
    const zip = new JSZip();
    files.forEach((item) => {
      if (item.compressed) zip.file(outputName(item), item.compressed);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tinypix-images.zip";
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    files.forEach((f) => URL.revokeObjectURL(f.preview));
    setFiles([]);
  };

  const compressedFiles = files.filter((f) => f.compressed);
  const totalBefore = compressedFiles.reduce((s, f) => s + f.original.size, 0);
  const totalAfter = compressedFiles.reduce((s, f) => s + f.compressed.size, 0);
  const totalSavedPct =
    totalBefore > 0 ? (100 - (totalAfter / totalBefore) * 100).toFixed(0) : 0;
  const totalGrew = totalAfter > totalBefore;

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 pb-20 z-10">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <header className="w-full max-w-3xl flex items-center justify-between py-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff7a59] to-[#a78bfa] flex items-center justify-center font-black text-lg shadow-lg shadow-[#ff7a59]/30">⚡</div>
          <span className="font-extrabold text-xl tracking-tight">TinyPix</span>
        </div>
        <span className="text-xs text-white/50 glass px-3 py-1.5 rounded-full">🔒 100% private, no servers</span>
      </header>

      <section className="text-center mt-10 mb-10 relative z-10 fade-up">
        <h1 className="text-4xl sm:text-5xl font-black leading-tight">
          Shrink your images, <span className="bg-gradient-to-r from-[#ff7a59] to-[#a78bfa] bg-clip-text text-transparent">not their quality</span>
        </h1>
        <p className="text-white/60 mt-4 max-w-md mx-auto">
          Compress, resize and convert JPG, PNG and WebP right in your browser. Your images never leave your device. Free, fast, unlimited.
        </p>
      </section>

      <div className="w-full max-w-2xl relative z-10 fade-up">
        <div className="glow-border">
          <div
            onClick={() => inputRef.current.click()}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`glow-border-inner p-14 text-center cursor-pointer transition-all duration-300 ${isDragging ? "scale-[1.02] bg-[#1b1440]" : "hover:bg-[#181234]"}`}
          >
            <div className="text-5xl mb-4">🖼️</div>
            <p className="text-xl font-bold">Drop your images here or click to browse</p>
            <p className="text-sm text-white/40 mt-2">JPG · PNG · WebP, unlimited files</p>
            <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={(e) => handleFiles(e.target.files)} />
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="w-full max-w-2xl relative z-10">
          {compressedFiles.length > 0 && (
            <div className="glass rounded-2xl p-4 mt-6 flex items-center justify-around text-center fade-up">
              <div>
                <p className="text-xs text-white/50">Before</p>
                <p className="font-bold">{formatSize(totalBefore)}</p>
              </div>
              <div className="text-2xl">→</div>
              <div>
                <p className="text-xs text-white/50">After</p>
                <p className="font-bold text-[#ff7a59]">{formatSize(totalAfter)}</p>
              </div>
              <div className={`rounded-xl px-4 py-2 ${totalGrew ? "bg-red-500/20 border border-red-500/40" : "bg-gradient-to-r from-[#ff7a59] to-[#a78bfa]"}`}>
                <p className="text-xs text-white/80">{totalGrew ? "Size grew" : "You saved"}</p>
                <p className="font-black text-xl">{totalGrew ? "+" + Math.abs(totalSavedPct) + "%" : totalSavedPct + "%"}</p>
              </div>
            </div>
          )}

          {/* Resize selector */}
          <div className="glass rounded-2xl p-5 mt-4 fade-up">
            <div className="flex justify-between mb-3">
              <span className="font-semibold">Max dimensions</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setMaxSize(s.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                    maxSize === s.id
                      ? "bg-gradient-to-r from-[#ff7a59] to-[#a78bfa] text-white shadow-lg shadow-[#ff7a59]/30"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-2">
              {maxSize === 0
                ? "Keeps the original width and height"
                : `Longest side will be reduced to ${maxSize}px. Aspect ratio is always preserved.`}
            </p>
          </div>

          {/* Format selector */}
          <div className="glass rounded-2xl p-5 mt-4 fade-up">
            <div className="flex justify-between mb-3">
              <span className="font-semibold">Output format</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {FORMATS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFormat(f.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                    format === f.id
                      ? "bg-gradient-to-r from-[#ff7a59] to-[#a78bfa] text-white shadow-lg shadow-[#ff7a59]/30"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-2">
              {format === "image/png"
                ? "⚠️ PNG is lossless: photos will often get BIGGER. Use it only for graphics, logos and screenshots."
                : "Tip: WebP usually gives the smallest files for the web"}
            </p>
          </div>

          {/* Quality slider */}
          <div className="glass rounded-2xl p-5 mt-4 fade-up">
            <div className="flex justify-between mb-3">
              <span className="font-semibold">Compression quality</span>
              <span className="font-black text-[#ff7a59]">{quality}%</span>
            </div>
            <input type="range" min="10" max="100" value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-full" />
            <p className="text-xs text-white/40 mt-2">Lower quality = smaller size · 70% is the sweet spot</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-5 justify-center fade-up">
            <button
              onClick={compressAll}
              disabled={isCompressing}
              className="bg-gradient-to-r from-[#ff7a59] to-[#e85d3d] hover:brightness-110 disabled:opacity-50 px-10 py-3.5 rounded-2xl font-extrabold text-lg transition shadow-lg shadow-[#ff7a59]/30"
            >
              {isCompressing ? "⏳ Working..." : "🚀 Compress images"}
            </button>
            {compressedFiles.length > 1 && (
              <button onClick={downloadAllZip} className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] hover:brightness-110 px-7 py-3.5 rounded-2xl font-bold transition shadow-lg shadow-[#7c3aed]/30">
                📦 Download all (ZIP)
              </button>
            )}
            <button onClick={reset} title="Clear all" className="glass hover:bg-white/10 px-5 py-3.5 rounded-2xl transition">🗑️</button>
          </div>

          {/* File list */}
          <div className="mt-6 space-y-3">
            {files.map((item, i) => (
              <div key={i} className="glass rounded-2xl p-3 flex items-center gap-3 fade-up hover:bg-white/[0.06] transition">
                <img src={item.preview} alt="" className="w-14 h-14 rounded-xl object-cover flex-shrink-0 ring-1 ring-white/10" />
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-semibold">{item.original.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {formatSize(item.original.size)}
                    {item.compressed && (
                      <>
                        {" → "}
                        <span className="text-[#ff7a59] font-bold">{formatSize(item.compressed.size)}</span>
                      </>
                    )}
                  </p>
                </div>
                {item.compressed && (
                  <>
                    <span className={`text-xs font-black px-3 py-1.5 rounded-xl whitespace-nowrap border ${
                      grewBigger(item)
                        ? "bg-red-500/10 text-red-300 border-red-500/30"
                        : "bg-gradient-to-r from-[#ff7a59]/20 to-[#a78bfa]/20 text-[#ffb49e] border-[#ff7a59]/30"
                    }`}>
                      {grewBigger(item) ? "+" + Math.abs(savings(item)) + "%" : "-" + savings(item) + "%"}
                    </span>
                    <button
                      onClick={() => download(item)}
                      title="Download image"
                      className="group bg-gradient-to-br from-[#ff7a59] to-[#a78bfa] hover:shadow-lg hover:shadow-[#ff7a59]/40 hover:scale-110 active:scale-95 w-10 h-10 rounded-xl transition-all duration-200 flex-shrink-0 flex items-center justify-center"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
                        <path d="M12 3v12" />
                        <path d="m7 11 5 5 5-5" />
                        <path d="M5 21h14" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className="mt-auto pt-16 text-center text-white/30 text-xs relative z-10">
        <div className="mb-3 flex flex-wrap justify-center gap-x-2 gap-y-1">
          <a href="/how-to-compress-images" className="text-white/50 hover:text-[#ff7a59] transition underline">How to compress</a>
          <span>·</span>
          <a href="/png-to-webp" className="text-white/50 hover:text-[#ff7a59] transition underline">PNG to WebP</a>
          <span>·</span>
          <a href="/jpg-to-webp" className="text-white/50 hover:text-[#ff7a59] transition underline">JPG to WebP</a>
          <span>·</span>
          <a href="/compress-images-for-email" className="text-white/50 hover:text-[#ff7a59] transition underline">For email</a>
          <span>·</span>
          <a href="/faq" className="text-white/50 hover:text-[#ff7a59] transition underline">FAQ</a>
        </div>
        <p>TinyPix — your images never get stored anywhere</p>
      </footer>
    </main>
  );
}