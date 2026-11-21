"use client";

import { useState } from "react";
import type { FormEvent } from "react";


export default function ContactForm () {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setIsSending(true);
        setStatus("");

        const form= event.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                });


                const result = await response.json();


                if(!response.ok) {
                    throw new Error(
                        result.error || "Failed to send message."
                    );                    
                }

                setStatus("Message sent successfully!");
                form.reset();

              } catch (error) {
                setStatus(
                    error instanceof Error
                    ? error.message
                    : "Something went wrong."
                );


            } finally {
                setIsSending(false);
            
            }
    };
    
    return (
 <div>


    {/* Form */}
    <form
        onSubmit={handleSubmit}
        className="
        grid grid-cols-1 gap-4
        rounded-2xl border border-lime/30
        bg-panel p-5 sm:p-6
        md:grid-cols-6
        md:min-w-[650px]
        "  
        
        >

         {/* Name input */}
            <div className="flex flex-col gap-2 md:col-span-3">
                <label
                    htmlFor="name"
                    className="font-mono text-xs text-paper"
                >
                    Name:
                </label>

                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="
                        w-full rounded-lg border border-panel2
                        bg-panel2 px-3 py-2.5
                        font-display text-base font-normal
                        text-paper placeholder:text-muted
                        outline-none transition-colors
                        focus:border-lime/60
                        "
                />
            </div>

            {/* Email input */}
            <div className="flex flex-col gap-2 md:col-span-3">
                <label
                    htmlFor="email"
                    className="font-mono text-xs text-paper"
                >
                    Email:
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="
                        w-full rounded-lg border border-panel2
                        bg-panel2 px-3 py-2.5
                        font-display text-base font-normal
                        text-paper placeholder:text-muted
                        outline-none transition-colors
                        focus:border-lime/60
                        "
                />
            </div>

                {/* Message input */}
            <div className="flex flex-col gap-2 md:col-span-4">
                <label
                    htmlFor="message"
                    className="font-mono text-xs text-paper"
                >
                    Message:
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell me about your project..."
                    required
                   className="
                        w-full rounded-lg border border-panel2
                        bg-panel2 px-3 py-2.5
                        font-display text-base font-normal
                        text-paper placeholder:text-muted
                        outline-none transition-colors
                        focus:border-lime/60
                        "
                />
            </div>

                {/* Submit btn */}
            <div className="flex items-center justify-center md:col-span-2">
                <button
                type="submit"
                className="
                    rounded-lg bg-lime
                    px-5 py-2.5
                    font-mono text-[11px]
                    text-ink
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:brightness-110
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
                >
                    {isSending ? "Sending..." : "Send Message"}
                </button>
            </div>

                {/* Status Message */}
            {status && (
                <p
                    role="status"
                    aria-live="polite"
                    className="text-xs text-lavender md:col-span-6"
                    >
                        {status}
                    </p>
                )}
        </form>
    </div>
    );

}