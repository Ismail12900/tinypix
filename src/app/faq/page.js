export const metadata = {
  title: "FAQ - Frequently Asked Questions | TinyPix Image Compressor",
  description:
    "Answers to common questions about TinyPix: Is it free? Is it safe? Does compression reduce quality? How does browser-based image compression work?",
};

const faqs = [
  {
    q: "Is TinyPix really free?",
    a: "Yes, 100% free with no limits. You can compress as many images as you want, as often as you want. There is no signup, no watermark, and no hidden paid tier.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. TinyPix compresses images directly in your browser using JavaScript. Your files never leave your device, which makes it both faster and completely private. You can even use it offline once the page is loaded.",
  },
  {
    q: "Will compression reduce my image quality?",
    a: "Compression removes data your eyes barely notice. At the default 70% quality setting, most photos look identical to the original on screens while being 3 to 10 times smaller. You control the quality slider, so you can always find your own balance between size and sharpness.",
  },
  {
    q: "What image formats are supported?",
    a: "TinyPix supports JPG, PNG and WebP, the three most common image formats on the web. You can compress multiple images at once and download them individually or as a single ZIP file.",
  },
  {
    q: "Is there a file size or quantity limit?",
    a: "No hard limits. Because everything runs on your own device, you can compress large batches of images. Very large files (over 50 MB each) may take a few extra seconds depending on your device.",
  },
  {
    q: "Why is my PNG barely getting smaller?",
    a: "PNG is a lossless format, so it compresses less aggressively than JPG. If your PNG is a photograph, converting it to JPG or WebP will give much bigger savings, often 80% or more.",
  },
  {
    q: "Can I use TinyPix on my phone?",
    a: "Yes. TinyPix works on any modern browser, including mobile ones. Open the site on your phone, pick images from your gallery, compress them and download the results directly.",
  },
];

export default function FAQ() {
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
          Frequently Asked <span className="bg-gradient-to-r from-[#ff7a59] to-[#a78bfa] bg-clip-text text-transparent">Questions</span>
        </h1>
        <p className="text-white/60 text-lg mb-10">
          Everything you need to know about compressing images with TinyPix.
        </p>

        <section className="space-y-4 text-white/80 leading-relaxed">
          {faqs.map((item, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <h2 className="text-xl font-extrabold mb-2 text-white">{item.q}</h2>
              <p>{item.a}</p>
            </div>
          ))}
        </section>

        <div className="glow-border mt-12">
          <div className="glow-border-inner p-10 text-center">
            <h2 className="text-2xl font-black mb-2">Still have questions?</h2>
            <p className="text-white/50 mb-6">The best way to see how it works is to try it. It takes seconds.</p>
            <a href="/" className="inline-block bg-gradient-to-r from-[#ff7a59] to-[#e85d3d] hover:brightness-110 px-10 py-3.5 rounded-2xl font-extrabold text-lg transition shadow-lg shadow-[#ff7a59]/30">Try TinyPix now, free</a>
          </div>
        </div>

        <p className="text-white/40 text-sm mt-8 text-center">
          Want to learn more? Read our guide: <a href="/how-to-compress-images" className="text-[#ff7a59] underline font-bold">How to compress images without losing quality</a>
        </p>
      </article>

      <footer className="mt-auto pt-16 text-center text-white/30 text-xs relative z-10">
        <p>TinyPix — your images never get stored anywhere</p>
      </footer>
    </main>
  );
}