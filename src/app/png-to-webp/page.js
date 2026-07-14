export const metadata = {
  title: "PNG to WebP Converter - Free, Private, No Upload | TinyPix",
  description:
    "Convert PNG images to WebP for free, directly in your browser. Cut file size by up to 90% with no visible quality loss. No uploads, no signup, unlimited files.",
};

export default function PngToWebp() {
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
          PNG to WebP Converter: <span className="bg-gradient-to-r from-[#ff7a59] to-[#a78bfa] bg-clip-text text-transparent">Free and Private</span>
        </h1>
        <p className="text-white/60 text-lg mb-10">
          Convert PNG images to WebP right in your browser and cut file sizes by up to 90%. No uploads, no signup, no limits. Your files never leave your device.
        </p>

        <div className="glow-border mb-12">
          <div className="glow-border-inner p-10 text-center">
            <h2 className="text-2xl font-black mb-2">Convert your PNG files now</h2>
            <p className="text-white/50 mb-6">Drop your images, pick WebP as the output format, and download. It takes seconds.</p>
            <a href="/" className="inline-block bg-gradient-to-r from-[#ff7a59] to-[#e85d3d] hover:brightness-110 px-10 py-3.5 rounded-2xl font-extrabold text-lg transition shadow-lg shadow-[#ff7a59]/30">Convert PNG to WebP, free</a>
          </div>
        </div>

        <section className="space-y-8 text-white/80 leading-relaxed">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">Why convert PNG to WebP?</h2>
            <p>
              WebP is a modern image format built for the web. It supports both lossy and lossless compression, plus transparency like PNG. For most images, WebP files are <strong className="text-[#ff7a59]">25% to 90% smaller</strong> than their PNG equivalents with no visible difference. Smaller images mean faster websites, better SEO scores, and lower bandwidth costs.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">Is WebP supported everywhere?</h2>
            <p>
              Yes. Every modern browser supports WebP: Chrome, Firefox, Safari, Edge and all mobile browsers. Unless you need to support very old software, WebP is a safe default for any website or app in 2026.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">How to convert PNG to WebP with TinyPix</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the <a href="/" className="text-[#ff7a59] font-bold underline">TinyPix converter</a></li>
              <li>Drop your PNG images or click to browse</li>
              <li>Under Output format, select <strong className="text-[#ff7a59]">WebP</strong></li>
              <li>Adjust the quality slider (70% works great for most images)</li>
              <li>Click Compress and convert, then download your files</li>
            </ol>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">Does the conversion keep transparency?</h2>
            <p>
              Yes. WebP fully supports transparency (alpha channel), so logos, icons and graphics with transparent backgrounds convert perfectly. This is a major advantage over JPG, which does not support transparency at all.
            </p>
          </div>
        </section>

        <p className="text-white/40 text-sm mt-8 text-center">
          Related: <a href="/how-to-compress-images" className="text-[#ff7a59] underline font-bold">How to compress images without losing quality</a>
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