export const metadata = {
  title: "How to Compress Images Without Losing Quality (2026 Guide) | TinyPix",
  description:
    "Learn how to compress JPG, PNG and WebP images without losing quality. Free step-by-step guide: best quality settings, format tips, and tools for web, email and social media.",
};

export default function HowToCompressImages() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 pb-20 z-10">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Header */}
      <header className="w-full max-w-3xl flex items-center justify-between py-6 relative z-10">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff7a59] to-[#a78bfa] flex items-center justify-center font-black text-lg shadow-lg shadow-[#ff7a59]/30">
            ⚡
          </div>
          <span className="font-extrabold text-xl tracking-tight">TinyPix</span>
        </a>
        
          href="/"
          className="text-sm bg-gradient-to-r from-[#ff7a59] to-[#e85d3d] hover:brightness-110 px-5 py-2 rounded-xl font-bold transition"
        >
          Compress images
        </a>
      </header>

      {/* Article */}
      <article className="w-full max-w-3xl relative z-10 fade-up">
        <h1 className="text-4xl font-black leading-tight mt-8 mb-4">
          How to Compress Images{" "}
          <span className="bg-gradient-to-r from-[#ff7a59] to-[#a78bfa] bg-clip-text text-transparent">
            Without Losing Quality
          </span>
        </h1>
        <p className="text-white/60 text-lg mb-10">
          Large images slow down websites, fill up storage, and get rejected by
          upload forms. Here is a practical guide to shrinking your image files
          while keeping them looking sharp.
        </p>

        <section className="space-y-8 text-white/80 leading-relaxed">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">
              1. Choose the right quality level
            </h2>
            <p>
              Image compression works by removing data your eyes barely notice.
              For photos, a quality setting between{" "}
              <strong className="text-[#ff7a59]">60% and 80%</strong> is the
              sweet spot: file size drops dramatically while the image still
              looks great on screens. Going below 50% starts to show visible
              artifacts, and going above 90% keeps files large for almost no
              visual gain.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">
              2. Pick the right format
            </h2>
            <p className="mb-3">
              The format matters as much as the quality setting. As a rule of
              thumb: photographs compress best as{" "}
              <strong className="text-[#ff7a59]">JPG</strong>, graphics with
              sharp edges, text or transparency belong in{" "}
              <strong className="text-[#ff7a59]">PNG</strong>, and{" "}
              <strong className="text-[#ff7a59]">WebP</strong> gives the
              smallest files of all for modern browsers. If your PNG photo is
              huge, converting it to JPG or WebP alone can cut the size by 80%
              or more.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">
              3. Resize before you compress
            </h2>
            <p>
              A photo straight from a phone camera can be 4000+ pixels wide,
              but most websites display images at 1200–1920 pixels. Resizing
              the image to the size it will actually be viewed at removes
              megabytes instantly, before compression even starts.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">
              4. Compress in your browser for privacy
            </h2>
            <p>
              Many online tools upload your images to their servers, which is
              slow and raises privacy questions. Modern tools like{" "}
              <a href="/" className="text-[#ff7a59] font-bold underline">
                TinyPix
              </a>{" "}
              compress images directly in your browser — the files never leave
              your device, there are no upload limits, and it works even on
              slow connections.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">
              Quick reference: recommended settings
            </h2>
            <ul className="space-y-2">
              <li>
                📧 <strong>Email attachments:</strong> 60–70% quality, resize
                to 1600px max
              </li>
              <li>
                🌐 <strong>Website images:</strong> 70–80% quality, WebP format
                when possible
              </li>
              <li>
                📱 <strong>Social media:</strong> 75% quality — platforms
                re-compress anyway
              </li>
              <li>
                🖨️ <strong>Printing:</strong> keep 90%+ quality and full
                resolution
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="glow-border mt-12">
          <div className="glow-border-inner p-10 text-center">
            <h2 className="text-2xl font-black mb-2">
              Ready to shrink your images?
            </h2>
            <p className="text-white/50 mb-6">
              Free, unlimited, and 100% private — right in your browser.
            </p>
            
              href="/"
              className="inline-block bg-gradient-to-r from-[#ff7a59] to-[#e85d3d] hover:brightness-110 px-10 py-3.5 rounded-2xl font-extrabold text-lg transition shadow-lg shadow-[#ff7a59]/30"
            >
              🚀 Compress images now — free
            </a>
          </div>
        </div>
      </article>

      <footer className="mt-auto pt-16 text-center text-white/30 text-xs relative z-10">
        <p>TinyPix ⚡ — your images never get stored anywhere</p>
      </footer>
    </main>
  );
}