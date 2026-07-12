"use client";

import { useState, useRef } from "react";
import imageCompression from "browser-image-compression";
import JSZip from "jszip";

export default function Home() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [quality, setQuality] = useState(70);
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

  const savings = (item) => {
    const pct = 100 - (item.compressed.size / item.original.size) * 100;
    return pct.toFixed(0);
  };

  const compressAll = async () => {
    setIsCompressing(true);
    const options = {
      initialQuality: quality / 100,
      maxSizeMB: 10,
      useWebWorker: true,
    };
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
    a.download = "compressed-" + item.original.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAllZip = async () => {
    const zip = new JSZip();
    files.forEach((item) => {
      if (item.compressed) {
        zip.file("compressed-" + item.original.name, item.compressed);
      }
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "compressed-images.zip";
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    files.forEach((f) => URL.revokeObjectURL(f.preview));
    setFiles([]);
  };

  const compressedCount = files.filter((f) => f.compressed).length;

  return (
    <main dir="rtl" className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-6">
<h1 className="text-3xl font-bold mt-10 mb-2">⚡ TinyPix</h1>
<p className="text-blue-400 text-sm mb-1">ضغط الصور مجانًا</p>      <p className="text-gray-400 mb-8 text-center">
        اضغط صورك مجانًا — كلشي كيتم فمتصفحك، بلا ما تطلع حتى صورة لأي سيرفر
      </p>

      <div
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`w-full max-w-xl border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition
          ${isDragging ? "border-blue-400 bg-blue-950" : "border-gray-600 hover:border-gray-400"}`}
      >
        <p className="text-lg">📂 جرّ الصور هنا أو كليكي باش تختار</p>
        <p className="text-sm text-gray-500 mt-2">JPG · PNG · WebP</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {files.length > 0 && (
        <>
          {/* سلايدر الجودة */}
          <div className="w-full max-w-xl mt-6 bg-gray-900 rounded-xl p-4">
            <div className="flex justify-between mb-2">
              <span>جودة الضغط</span>
              <span className="text-blue-400 font-bold">{quality}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full accent-blue-500"
              style={{ direction: "ltr" }}
            />
            <p className="text-xs text-gray-500 mt-1">جودة أقل = حجم أصغر</p>
          </div>

          {/* الأزرار */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            <button
              onClick={compressAll}
              disabled={isCompressing}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 px-8 py-3 rounded-xl font-bold transition"
            >
              {isCompressing ? "⏳ كيضغط..." : "🚀 اضغط الصور"}
            </button>
            {compressedCount > 1 && (
              <button
                onClick={downloadAllZip}
                className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-bold transition"
              >
                📦 حمّل الكل (ZIP)
              </button>
            )}
            <button
              onClick={reset}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-xl transition"
            >
              🗑️ مسح الكل
            </button>
          </div>

          {/* لائحة الصور */}
          <div className="w-full max-w-xl mt-6 space-y-2">
            {files.map((item, i) => (
              <div
                key={i}
                className="flex items-center bg-gray-900 rounded-xl p-3 gap-3"
              >
                <img
                  src={item.preview}
                  alt=""
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm">{item.original.name}</p>
                  <p className="text-gray-400 text-xs" style={{ direction: "ltr", textAlign: "right" }}>
                    {formatSize(item.original.size)}
                    {item.compressed && (
                      <>
                        {" → "}
                        <span className="text-green-400 font-bold">
                          {formatSize(item.compressed.size)}
                        </span>
                      </>
                    )}
                  </p>
                </div>
                {item.compressed && (
                  <span className="bg-green-950 text-green-400 text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap">
                    وفرتي {savings(item)}%
                  </span>
                )}
                {item.compressed && (
                  <button
                    onClick={() => download(item)}
                    className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded-lg text-sm transition flex-shrink-0"
                  >
                    ⬇️
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}