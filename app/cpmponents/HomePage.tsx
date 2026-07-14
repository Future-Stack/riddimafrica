"use client";

import { useState, FormEvent } from "react";
import { toast } from "react-toastify";

type ShareRowProps = {
  copied: boolean;
  onShare: (platform: "whatsapp" | "x" | "facebook") => void;
  onInstagram: () => void;
  onCopyLink: () => void;
};

function ShareRow({ copied, onShare, onInstagram, onCopyLink }: ShareRowProps) {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      <button
        type="button"
        onClick={() => onShare("whatsapp")}
        aria-label="Share on WhatsApp"
        className="rounded-full bg-[#25D366] w-11 h-11 flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.012 0C5.373 0 0 5.373 0 12.012c0 2.116.555 4.104 1.526 5.83L0 24l6.31-1.653a11.95 11.95 0 0 0 5.702 1.454h.005c6.639 0 12.012-5.373 12.012-12.012C24.03 5.373 18.657 0 12.012 0zm0 21.783a9.73 9.73 0 0 1-4.964-1.362l-.356-.211-3.744.981.999-3.648-.232-.374a9.73 9.73 0 0 1-1.49-5.157c0-5.373 4.373-9.747 9.79-9.747 2.615 0 5.073 1.019 6.922 2.868a9.72 9.72 0 0 1 2.868 6.92c0 5.374-4.373 9.73-9.793 9.73z" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => onShare("x")}
        aria-label="Share on X"
        className="rounded-full bg-black w-11 h-11 flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => onShare("facebook")}
        aria-label="Share on Facebook"
        className="rounded-full bg-[#1877F2] w-11 h-11 flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onInstagram}
        aria-label="Share on Instagram"
        className="rounded-full w-11 h-11 flex items-center justify-center hover:opacity-90 transition-opacity"
        style={{
          background:
            "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
        }}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onCopyLink}
        className="rounded-full bg-[#8C36326B] border border-[#F0EBE81F] h-11 px-4 flex items-center justify-center text-xs text-[#F0EBE8B2] hover:border-brand-teal transition-colors whitespace-nowrap"
      >
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);


  const siteUrl = "https://riddimafrica.com"; 
  const shareText =
    "Riddim Africa is coming \uD83C\uDFB6 Africa's new home for music, merch and artists — where artists and creators get paid instantly. Launching September. Join the waitlist \uD83D\uDC49 riddimafrica.com";

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!email || !consent) return;

        setSubmitted(true); 
        toast.success("You're now on the waitlist! ", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: true,
            closeOnClick: true,
            theme: "dark",
        });

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbxFbRSDmrSg1-0UT1sxceK6LmUKWr5jYQCvmrcbeG77_v3HSjIEP58yGiRq1g2j/exec",
                {
                    method: "POST",
                    headers: { "Content-Type": "text/plain" },
                    body: JSON.stringify({ email, phone, consent, source: "landing" }),
                }
            );
        } catch (err) {
            console.error("Failed to save signup:", err);
        }
    }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("you are on the list")
    } catch {
      // clipboard blocked — silently ignore, button still visible
    }
  }

  function openShare(platform: "whatsapp" | "x" | "facebook") {
    const encodedUrl = encodeURIComponent(siteUrl);
    const encodedText = encodeURIComponent(shareText);
    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodedText}`,
      x: `https://twitter.com/intent/tweet?text=${encodedText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  }

  function openInstagram() {
    navigator.clipboard.writeText(shareText).catch(() => {});
    window.open("https://www.instagram.com", "_blank", "noopener,noreferrer");
  }
  return (
    <main className="relative min-h-screen text-brand-cream flex flex-col">
   
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-center mb-[129px] z-10">
        <h1
          className="font-display font-black font-fraunces leading-[91px] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] text-transparent bg-clip-text"
          style={{
            background:
              "linear-gradient(135deg, #F0EBE8 0%, #C9963A 40%, #5DADAF 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span className="block">Riddim</span>
          <span className="block">Africa</span>
        </h1>

        <p className="mt-3 text-[#C9963A] font-bold text-xl sm:text-2xl leading-8 font-inter">
          Launching September 2026
        </p>

        <p className="mt-3 max-w-md sm:max-w-lg text-[#C1D6D7] text-sm sm:text-base leading-relaxed font-inter font-normal">
          The home for African music — where artists connect, sounds travel,
          and culture moves.
        </p>

        <div className="flex items-center gap-3 mt-10 sm:mt-12 w-full max-w-xs sm:max-w-sm">
          <span className="h-px flex-1 bg-[#9A565B]" />
          <span className="text-xs text-[#C1D6D7] font-medium leading-4.5 font-inter whitespace-nowrap">
            Join the waitlist
          </span>
          <span className="h-px flex-1 bg-[#9A565B]" />
        </div>

        {submitted ? (
          <div className="mt-6 w-full max-w-xs sm:max-w-sm rounded-lg border border-[#8C36326B] bg-brand-teal/10 px-5 py-6 text-sm text-green-100 flex flex-col items-center gap-4">
            <div>
              <p className="font-semibold"> You&apos;re on the list!</p>
              <p className="mt-1 text-[#C1D6D7]">We&apos;ll reach out before launch.</p>
            </div>
            <p className="text-[#F0EBE8] text-sm font-medium">
              Now bring your people with you 
            </p>
            <ShareRow
              copied={copied}
              onShare={openShare}
              onInstagram={openInstagram}
              onCopyLink={handleCopyLink}
            />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full max-w-xs sm:max-w-sm flex flex-col gap-3"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[14px] bg-[#8C36326B] border border-[#F0EBE81F] px-5 py-3.5 text-sm md:text-base font-normal leadng-6 text-[#F0EBE8B2] placeholder:text-[#F0EBE8B2] outline-none focus:border-brand-teal transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-[14px] bg-[#8C36326B] border border-[#F0EBE81F] px-5 py-3.5 text-sm md:text-base font-normal leadng-6 text-[#F0EBE8B2] placeholder:text-[#F0EBE8B2] outline-none focus:border-brand-teal transition-colors"
            />

            <label className="flex items-start gap-2.5 text-left mt-1  cursor-pointer">
             <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 appearance-none rounded border border-0 bg-[#28C7CC] checked:bg-[#28C7CC] checked:border-red-600 checked:after:content-['✓'] checked:after:flex checked:after:items-center cursor-pointer checked:after:justify-center checked:after:text-white checked:after:text-[10px]"
/>
              <span className="text-xs text-[#C1D6D7] leading-4 font-inter">
                By joining, you agree that Riddim Africa may contact you about
                our launch.
              </span>
            </label>

            <button
              type="submit"
              disabled={!consent}
              className="w-full rounded-[14px] bg-[#28C7CC] hover:bg-brand-teal/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors text-white font-bold text-sm md:text-base leading-5 py-3 mt-3"
            >
              Get early access
            </button>
            <p className="text-xs text-[#C1D6D7] leading-4 font-inter font-normal mt-3">
              We&apos;ll reach out before launch. No spam, ever.
            </p>
          </form>
        )}
      </section>

      <footer className="border-t border-[#FFFFFF33] px-6 md:px-12 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9B8FA0] font-medium font-inter leading-4">
          <span>© 2026 Riddim Africa. All rights reserved.</span>
          <span className="flex items-center gap-2 text-[#C9963A] text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9963A]" />
            Launching Sep 2026
          </span>
          <span>admin@riddimafrica.com</span>
        </div>
      </footer>
    </main>
  );
}



// "use client";

// import { useState, FormEvent } from "react";

// export default function Home() {
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [consent, setConsent] = useState(false);
//     const [submitted, setSubmitted] = useState(false);
//     const [copied, setCopied] = useState(false);

//     const siteUrl = "https://riddimafrica.com"; 
//     const shareText =
//         "Riddim Africa is coming \uD83C\uDFB6 Africa's new home for music, merch and artists — where artists and creators get paid instantly. Launching September. Join the waitlist \uD83D\uDC49 riddimafrica.com";

//     function handleSubmit(e: FormEvent) {
//         e.preventDefault();
//         if (!email || !consent) return;
//         setSubmitted(true);
      
//     }

//     async function handleCopyLink() {
//         try {
//             await navigator.clipboard.writeText(siteUrl);
//             setCopied(true);
//             setTimeout(() => setCopied(false), 2000);
//         } catch {
            
//         }
//     }

//     function openShare(platform: "whatsapp" | "x" | "facebook") {
//         const encodedUrl = encodeURIComponent(siteUrl);
//         const encodedText = encodeURIComponent(shareText);
//         const urls: Record<string, string> = {
//             whatsapp: `https://wa.me/?text=${encodedText}`,
//             x: `https://twitter.com/intent/tweet?text=${encodedText}`,
//             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
//         };
//         window.open(urls[platform], "_blank", "noopener,noreferrer");
//     }

//     function openInstagram() {
//         navigator.clipboard.writeText(shareText).catch(() => { });
//         window.open("https://www.instagram.com", "_blank", "noopener,noreferrer");
//     }

//     const ShareRow = () => (
//         <div className="flex items-center justify-center gap-3 flex-wrap">
//             <button
//                 type="button"
//                 onClick={() => openShare("whatsapp")}
//                 aria-label="Share on WhatsApp"
//                 className="rounded-full bg-[#25D366] w-11 h-11 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
//             >
//                 <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//                     <path d="M12.012 0C5.373 0 0 5.373 0 12.012c0 2.116.555 4.104 1.526 5.83L0 24l6.31-1.653a11.95 11.95 0 0 0 5.702 1.454h.005c6.639 0 12.012-5.373 12.012-12.012C24.03 5.373 18.657 0 12.012 0zm0 21.783a9.73 9.73 0 0 1-4.964-1.362l-.356-.211-3.744.981.999-3.648-.232-.374a9.73 9.73 0 0 1-1.49-5.157c0-5.373 4.373-9.747 9.79-9.747 2.615 0 5.073 1.019 6.922 2.868a9.72 9.72 0 0 1 2.868 6.92c0 5.374-4.373 9.73-9.793 9.73z" />
//                 </svg>
//             </button>

//             <button
//                 type="button"
//                 onClick={() => openShare("x")}
//                 aria-label="Share on X"
//                 className="rounded-full bg-black w-11 h-11 flex items-center cursor-pointer justify-center hover:opacity-90 transition-opacity"
//             >
//                 <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
//                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                 </svg>
//             </button>

//             <button
//                 type="button"
//                 onClick={() => openShare("facebook")}
//                 aria-label="Share on Facebook"
//                 className="rounded-full bg-[#1877F2] w-11 h-11 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
//             >
//                 <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
//                     <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
//                 </svg>
//             </button>

//             <button
//                 type="button"
//                 onClick={openInstagram}
//                 aria-label="Share on Instagram"
//                 className="rounded-full w-11 h-11 flex items-center justify-center hover:opacity-90 cursor-pointer transition-opacity"
//                 style={{
//                     background:
//                         "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
//                 }}
//             >
//                 <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
//                 </svg>
//             </button>

//             <button
//                 type="button"
//                 onClick={handleCopyLink}
//                 className="rounded-full bg-[#8C36326B] border border-[#F0EBE81F] cursor-pointer h-11 px-4 flex items-center justify-center text-xs text-[#F0EBE8B2] hover:border-brand-teal transition-colors whitespace-nowrap"
//             >
//                 {copied ? "Copied!" : "Copy link"}
//             </button>
//         </div>
//     );

//     return (
//         <main className="relative min-h-screen text-brand-cream flex flex-col">
//             <section className="flex-1 flex flex-col items-center justify-center px-6 text-center mb-[129px] z-10">
//                 <h1
//                     className="font-display font-black font-fraunces leading-[91px] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] text-transparent bg-clip-text"
//                     style={{
//                         background:
//                             "linear-gradient(135deg, #F0EBE8 0%, #C9963A 40%, #5DADAF 80%)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                     }}
//                 >
//                     <span className="block">Riddim</span>
//                     <span className="block">Africa</span>
//                 </h1>

//                 <p className="mt-3 text-[#C9963A] font-bold text-xl sm:text-2xl leading-8 font-inter">
//                     Launching September 2026
//                 </p>

//                 <p className="mt-3 max-w-md sm:max-w-lg text-[#C1D6D7] text-sm sm:text-base leading-relaxed font-inter font-normal">
//                     The home for African music — where artists connect, sounds travel,
//                     and culture moves.
//                 </p>

//                 <div className="flex items-center gap-3 mt-10 sm:mt-12 w-full max-w-xs sm:max-w-sm">
//                     <span className="h-px flex-1 bg-[#9A565B]" />
//                     <span className="text-xs text-[#C1D6D7] font-medium leading-4.5 font-inter whitespace-nowrap">
//                         Join the waitlist
//                     </span>
//                     <span className="h-px flex-1 bg-[#9A565B]" />
//                 </div>

//                 {submitted ? (
//                     <div className="mt-6 w-full max-w-xs sm:max-w-sm rounded-lg border border-[#8C36326B] bg-brand-teal/10 px-5 py-6 text-sm text-green-100 flex flex-col items-center gap-4">
//                         <div>
//                             <p className="font-semibold"> You&apos;re on the list!</p>
//                             <p className="mt-1 text-[#C1D6D7]">We&apos;ll reach out before launch.</p>
//                         </div>
//                         <p className="text-[#F0EBE8] text-sm font-medium">
//                             Now bring your people with you 
//                         </p>
//                         <ShareRow />
//                     </div>
//                 ) : (
//                     <form
//                         onSubmit={handleSubmit}
//                         className="mt-6 w-full max-w-xs sm:max-w-sm flex flex-col gap-3"
//                     >
//                         <input
//                             type="email"
//                             required
//                             placeholder="Email address"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full rounded-[14px] bg-[#8C36326B] border border-[#F0EBE81F] px-5 py-3.5 text-sm md:text-base font-normal leadng-6 text-[#F0EBE8B2] placeholder:text-[#F0EBE8B2] outline-none focus:border-brand-teal transition-colors"
//                         />
//                         <input
//                             type="tel"
//                             placeholder="Phone number"
//                             value={phone}
//                             onChange={(e) => setPhone(e.target.value)}
//                             className="w-full rounded-[14px] bg-[#8C36326B] border border-[#F0EBE81F] px-5 py-3.5 text-sm md:text-base font-normal leadng-6 text-[#F0EBE8B2] placeholder:text-[#F0EBE8B2] outline-none focus:border-brand-teal transition-colors"
//                         />

//                         <label className="flex items-start gap-2.5 text-left mt-1 cursor-pointer">
//                             <input
//                                 type="checkbox"
//                                 required
//                                 checked={consent}
//                                 onChange={(e) => setConsent(e.target.checked)}
//                                 className="mt-0.5 w-4 h-4 shrink-0 accent-[#28C7CC]"
//                             />
//                             <span className="text-xs text-[#C1D6D7] leading-4 font-inter">
//                                 By joining, you agree that Riddim Africa may contact you about
//                                 our launch.
//                             </span>
//                         </label>

//                         <button
//                             type="submit"
//                             disabled={!consent}
//                             className="w-full rounded-[14px] bg-[#28C7CC] hover:bg-brand-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white font-bold text-sm md:text-base leading-5 py-3 mt-3"
//                         >
//                             Get early access
//                         </button>
//                         <p className="text-xs text-[#C1D6D7] leading-4 font-inter font-normal mt-3">
//                             We&apos;ll reach out before launch. No spam, ever.
//                         </p>
//                     </form>
//                 )}
//             </section>

//             <footer className="border-t border-[#FFFFFF33] px-6 md:px-12 py-5">
//                 <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9B8FA0] font-medium font-inter leading-4">
//                     <span>© 2026 Riddim Africa. All rights reserved.</span>
//                     <span className="flex items-center gap-2 text-[#C9963A] text-sm">
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#C9963A]" />
//                         Launching Sep 2026
//                     </span>
//                     <span>admin@riddimafrica.com</span>
//                 </div>
//             </footer>
//         </main>
//     );
// }



// "use client";

// import { useState, FormEvent } from "react";


// export default function Home() {
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [submitted, setSubmitted] = useState(false);

//     function handleSubmit(e: FormEvent) {
//         e.preventDefault();
//         if (!email) return;
//         setSubmitted(true);
//     }

//     return (
//         <main className="relative min-h-screen  text-brand-cream flex flex-col  ">
     
        
//             <section className="flex-1 flex flex-col items-center justify-center px-6 text-center mb-[129px] z-10">
//                 <h1
//                     className="font-display font-black font-fraunces leading-[91px] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] text-transparent bg-clip-text"
//                     style={{
//                         background: "linear-gradient(135deg, #F0EBE8 0%, #C9963A 40%, #5DADAF 80%)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                     }}
//                 >
//                     <span className="block">Riddim</span>
//                     <span className="block">Africa</span>
//                 </h1>

//                 <p className="mt-3 text-[#C9963A] font-bold text-xl sm:text-2xl leading-8 font-inter">
//                     Launching September 2026
//                 </p>

//                 <p className="mt-3 max-w-md sm:max-w-lg text-[#C1D6D7] text-sm sm:text-base leading-relaxed font-inter font-normal">
//                     The home for African music — where artists connect, sounds travel,
//                     and culture moves.
//                 </p>

             
//                 <div className="flex items-center gap-3 mt-10 sm:mt-12 w-full max-w-xs sm:max-w-sm">
//                     <span className="h-px flex-1 bg-[#9A565B]" />
//                     <span className="text-xs  text-[#C1D6D7] font-medium leading-4.5 font-inter whitespace-nowrap">
//                         Join the waitlist
//                     </span>
//                     <span className="h-px flex-1 bg-[#9A565B]" />
//                 </div>

    
//                 {submitted ? (
//                     <div className="mt-6 w-full max-w-xs sm:max-w-sm rounded-lg border border-[#8C36326B] bg-brand-teal/10 px-5 py-6 text-sm text-green-100">
//                         You&apos;re on the list! We&apos;ll be in touch before launch.
//                     </div>
//                 ) : (
//                     <form
//                         onSubmit={handleSubmit}
//                         className="mt-6 w-full max-w-xs sm:max-w-sm flex flex-col gap-3"
//                     >
//                         <input
//                             type="email"
//                             required
//                             placeholder="Email address"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full rounded-[14px] bg-[#8C36326B] border border-[#F0EBE81F] px-5 py-3.5 text-sm md:text-base font-normal leadng-6 text-[#F0EBE8B2] placeholder:text-[#F0EBE8B2] outline-none focus:border-brand-teal transition-colors"
//                         />
//                         <input
//                             type="tel"
//                             placeholder="Phone number"
//                             value={phone}
//                             onChange={(e) => setPhone(e.target.value)}
//                                 className="w-full  rounded-[14px] bg-[#8C36326B] border border-[#F0EBE81F] px-5 py-3.5 text-sm md:text-base font-normal leadng-6 text-[#F0EBE8B2] placeholder:text-[#F0EBE8B2] outline-none focus:border-brand-teal transition-colors"
//                         />
//                         <button
//                             type="submit"
//                                 className="w-full rounded-[14px] bg-[#28C7CC]  hover:bg-brand-teal/90 transition-colors text-white font-bold text-sm md:text-base leading-5 py-3 mt-6"
//                         >
//                             Get early access
//                         </button>
//                             <p className="text-xs  text-[#C1D6D7] leading-4 font-inter font-normal mt-3">
//                             We&apos;ll reach out before launch. No spam, ever.
//                         </p>
//                     </form>
//                 )}
//             </section>

   
//             <footer className="border-t border-[#FFFFFF33] px-6 md:px-12 py-5">
//                 <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9B8FA0] font-medium font-inter leading-4">
//                     <span >© 2026 Riddim Africa. All rights reserved.</span>
//                     <span className="flex items-center gap-2 text-[#C9963A] text-sm">
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#C9963A]" />
//                         Launching Sep 2026
//                     </span>
//                     <span>admin@riddimafrica.com</span>
//                 </div>
//             </footer>
//         </main>
//     );
// }