"use client";

import { useState, FormEvent } from "react";
import CommingSoonIcon from "./svgIcon/commingSoonIcon";

export default function Home() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
    }

    return (
        <main className="min-h-screen bg-[#594B66] text-brand-cream flex flex-col border border-white/10">
      
            <header className="flex items-start justify-between px-6 md:px-12 pt-6 sm:pt-9">
                <div className="flex items-center gap-2">
                 <img src="/logo.svg" alt="" />
                </div>
                <div className="relative flex flex-col items-center">
                    <button className="rounded-full border border-[#C8963A59] text-[#C9963A] text-lg sm:text-xl px-4 sm:px-5 py-3 hover:bg-[#E0A458]/10 leading-6 transition-colors">
                        Get the App
                    </button>

             <div className="swing-tag ">
                        <div className="relative">
                            <div
                                className="absolute left-1/2 -translate-x-1/2  w-1.5 h-1.5 rounded-full bg-plum-bg border border-[#5F5468]"
                                aria-hidden="true"
                            />
                        <CommingSoonIcon/>
                        </div>
                    </div>
                </div>
            </header>

        
            <section className="flex-1 flex flex-col items-center justify-center px-6 text-center mb-[129px]">
                <h1
                    className="font-display font-black font-fraunces leading-[91px] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] text-transparent bg-clip-text"
                    style={{
                        background: "linear-gradient(135deg, #F0EBE8 0%, #C9963A 40%, #5DADAF 80%)",
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
                    <span className="h-px flex-1 bg-[#F0EBE81A]" />
                    <span className="text-xs  text-[#79A6A8] font-medium leading-4.5 font-inter whitespace-nowrap">
                        Join the waitlist
                    </span>
                    <span className="h-px flex-1 bg-[#F0EBE81A]" />
                </div>

                {/* Form */}
                {submitted ? (
                    <div className="mt-6 w-full max-w-xs sm:max-w-sm rounded-lg border border-brand-teal/40 bg-brand-teal/10 px-5 py-6 text-sm text-brand-cream/90">
                        You&apos;re on the list! We&apos;ll be in touch before launch.
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
                                className="w-full rounded-[14px] bg-[#1E1228] border border-[#F0EBE81F] px-5 py-3.5 text-sm md:text-base font-normal leadng-6 text-[#F0EBE8B2] placeholder:text-[#F0EBE8B2] outline-none focus:border-brand-teal transition-colors"
                        />
                        <input
                            type="tel"
                            placeholder="Phone number (optional)"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                                className="w-full  rounded-[14px] bg-[#1E1228] border border-[#F0EBE81F] px-5 py-3.5 text-sm md:text-base font-normal leadng-6 text-[#F0EBE8B2] placeholder:text-[#F0EBE8B2] outline-none focus:border-brand-teal transition-colors"
                        />
                        <button
                            type="submit"
                                className="w-full rounded-[14px] bg-[#387C7E]  hover:bg-brand-teal/90 transition-colors text-white font-bold text-sm md:text-base leading-5 py-3 mt-6"
                        >
                            Get early access
                        </button>
                            <p className="text-xs  text-[#C1D6D7] leading-4 font-inter font-normal mt-3">
                            We&apos;ll reach out before launch. No spam, ever.
                        </p>
                    </form>
                )}
            </section>

   
            <footer className="border-t border-[#FFFFFF33] px-6 md:px-12 py-5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9B8FA0] font-medium font-inter leading-4">
                    <span >© 2026 Riddim Africa. All rights reserved.</span>
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