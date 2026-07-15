export const metadata = {
  title: "JPG to WebP Converter - Free, Private, No Upload | TinyPix",
  description:
    "Convert JPG images to WebP for free, directly in your browser. Get 25-35% smaller files at the same visual quality. No uploads, no signup, unlimited files.",
};

export default function JpgToWebp() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 pb-20 z-10">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <header className="w-full max-w-3xl flex items-center justify-between py-6 relative z-10">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff7a59] to-[#a78bfa] flex items-center justify-center font-black text-lg shadow-lg shadow-[#ff7a59]/30">⚡</div>
          <span className="font-extrabold text-xl tracking-tight">TinyPix</span>
        </a>
        <a href="/" className="text-sm bg-gradient-to-r from-[#ff7a59] to-[#e85d3d] hover:brightness-110 px-5 py-2 rounded-xl font-bold transition">Open converter</a>
      </header>

      <article className="w-full max-w-3xl relative z-10 fade-up">
        <h1 className="text-4xl font-black leading-tight mt-8 mb-4">
          JPG to WebP Converter: <span className="bg-gradient-to-r from-[#ff7a59] to-[#a78bfa] bg-clip-text text-transparent">Smaller Files, Same Quality</span>
        </h1>
        <p className="text-white/60 text-lg mb-10">
          Convert JPG images to WebP right in your browser. WebP typically delivers 25-35% smaller files than JPG at the same visual quality. No uploads, no signup, no limits.
        </p>

        <div className="glow-border mb-12">
          <div className="glow-border-inner p-10 text-center">
            <h2 className="text-2xl font-black mb-2">Convert your JPG files now</h2>
            <p className="text-white/50 mb-6">Drop your images, pick WebP as the output format, and download. It takes seconds.</p>
            <a href="/" className="inline-block bg-gradient-to-r from-[#ff7a59] to-[#e85d3d] hover:brightness-110 px-10 py-3.5 rounded-2xl font-extrabold text-lg transition shadow-lg shadow-[#ff7a59]/30">Convert JPG to WebP, free</a>
          </div>
        </div>

        <section className="space-y-8 text-white/80 leading-relaxed">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">Why convert JPG to WebP?</h2>
            <p>
              JPG has been the standard photo format for 30 years, but WebP uses far more efficient compression. At the same visual quality, WebP files are typically <strong className="text-[#ff7a59]">25-35% smaller</strong> than JPG. For a website full of photos, that means noticeably faster load times, better Core Web Vitals scores, and less bandwidth.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">When should you keep JPG?</h2>
            <p>
              JPG is still a fine choice when maximum compatibility matters: very old browsers, some email clients, and certain upload forms only accept JPG or PNG. For everything on the modern web, WebP is the better default. If a small JPG barely shrinks after conversion, it was already heavily compressed and there was simply little left to save.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">How to convert JPG to WebP with TinyPix</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the <a href="/" className="text-[#ff7a59] font-bold underline">TinyPix converter</a></li>
              <li>Drop your JPG images or click to browse</li>
              <li>Under Output format, select <strong className="text-[#ff7a59]">WebP</strong></li>
              <li>Set the quality slider around 70-80% for photos</li>
              <li>Click Compress and convert, then download your files</li>
            </ol>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">Is the conversion private?</h2>
            <p>
              Yes, completely. TinyPix runs entirely in your browser using JavaScript. Your photos are never uploaded to any server, which makes conversion faster and keeps your personal images truly private.
            </p>
          </div>
        </section>

        <p className="text-white/40 text-sm mt-8 text-center">
          Related: <a href="/png-to-webp" className="text-[#ff7a59] underline font-bold">PNG to WebP converter</a>
          <span className="mx-2">·</span>
          <a href="/how-to-compress-images" className="text-[#ff7a59] underline font-bold">How to compress images</a>
          <span className="mx-2">·</span>
          <a href="/faq" className="text-[#ff7a59] underline font-bold">FAQ</a>
        </p>
      </article>

      <footer className="mt-auto pt-16 text-center text-white/30 text-xs relative z-10">
        <p>TinyPix — your images never get stored anywhere</p>
      </footer>
    </main>
  );
}