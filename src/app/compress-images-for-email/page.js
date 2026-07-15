export const metadata = {
  title: "Compress Images for Email - Fit Any Attachment Limit | TinyPix",
  description:
    "Compress images to fit email attachment limits (Gmail 25MB, Outlook 20MB). Free browser-based tool: shrink photos for email in seconds, no uploads, no signup.",
};

export default function CompressForEmail() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 pb-20 z-10">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <header className="w-full max-w-3xl flex items-center justify-between py-6 relative z-10">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff7a59] to-[#a78bfa] flex items-center justify-center font-black text-lg shadow-lg shadow-[#ff7a59]/30">⚡</div>
          <span className="font-extrabold text-xl tracking-tight">TinyPix</span>
        </a>
        <a href="/" className="text-sm bg-gradient-to-r from-[#ff7a59] to-[#e85d3d] hover:brightness-110 px-5 py-2 rounded-xl font-bold transition">Compress images</a>
      </header>

      <article className="w-full max-w-3xl relative z-10 fade-up">
        <h1 className="text-4xl font-black leading-tight mt-8 mb-4">
          Compress Images for Email: <span className="bg-gradient-to-r from-[#ff7a59] to-[#a78bfa] bg-clip-text text-transparent">Fit Any Attachment Limit</span>
        </h1>
        <p className="text-white/60 text-lg mb-10">
          Email providers reject large attachments. Compress your photos in seconds, right in your browser, and send them without bounces, errors or endless upload bars.
        </p>

        <div className="glow-border mb-12">
          <div className="glow-border-inner p-10 text-center">
            <h2 className="text-2xl font-black mb-2">Shrink your photos for email now</h2>
            <p className="text-white/50 mb-6">Drop your images, set quality to 60-70%, and download. Done in seconds.</p>
            <a href="/" className="inline-block bg-gradient-to-r from-[#ff7a59] to-[#e85d3d] hover:brightness-110 px-10 py-3.5 rounded-2xl font-extrabold text-lg transition shadow-lg shadow-[#ff7a59]/30">Compress images for email, free</a>
          </div>
        </div>

        <section className="space-y-8 text-white/80 leading-relaxed">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">Email attachment size limits in 2026</h2>
            <ul className="space-y-2">
              <li>📮 <strong>Gmail:</strong> 25 MB total per email</li>
              <li>📮 <strong>Outlook / Hotmail:</strong> 20 MB total</li>
              <li>📮 <strong>Yahoo Mail:</strong> 25 MB total</li>
              <li>📮 <strong>Corporate mail servers:</strong> often just 10 MB</li>
            </ul>
            <p className="mt-3">
              Remember these limits apply to the <strong className="text-[#ff7a59]">whole email</strong>, not each file. A few photos straight from a phone camera (3-6 MB each) can hit the limit fast.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">Best settings for email attachments</h2>
            <p>
              For photos that will be viewed on a screen, set the quality slider to <strong className="text-[#ff7a59]">60-70%</strong>. A typical 5 MB phone photo drops to under 1 MB with no visible difference in an email. That means you can attach 20+ compressed photos in the space one original used to take.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">How to compress photos for email</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open <a href="/" className="text-[#ff7a59] font-bold underline">TinyPix</a> in any browser, on desktop or phone</li>
              <li>Drop in all the photos you want to send</li>
              <li>Set quality to 60-70%</li>
              <li>Click Compress images</li>
              <li>Download all as a ZIP and attach to your email</li>
            </ol>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold mb-3 text-white">Is it safe for private photos?</h2>
            <p>
              Yes. Unlike most online tools, TinyPix never uploads your photos anywhere. The compression happens inside your own browser, so personal pictures stay on your device from start to finish.
            </p>
          </div>
        </section>

        <p className="text-white/40 text-sm mt-8 text-center">
          Related: <a href="/how-to-compress-images" className="text-[#ff7a59] underline font-bold">How to compress images</a>
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