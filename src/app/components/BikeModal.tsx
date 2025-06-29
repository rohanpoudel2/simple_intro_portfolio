"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface BikeModalProps {
    open: boolean;
    onClose: () => void;
    photos: string[];
}

export default function BikeModal({ open, onClose, photos }: BikeModalProps) {
    const [zoomed, setZoomed] = useState<number | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === 'light';

    useEffect(() => {
        function updateScroll() {
            const el = galleryRef.current;
            if (!el) return;
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
        }
        updateScroll();
        const el = galleryRef.current;
        if (!el) return;
        el.addEventListener("scroll", updateScroll);
        window.addEventListener("resize", updateScroll);
        return () => {
            el.removeEventListener("scroll", updateScroll);
            window.removeEventListener("resize", updateScroll);
        };
    }, [open]);

    const scrollBy = (dir: "left" | "right") => {
        const el = galleryRef.current;
        if (!el) return;
        const scrollAmount = 384 + 32;
        el.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    };

    if (!open) return null;
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${isLight ? 'bg-black/30' : 'bg-black/60'} backdrop-blur-sm`} onClick={onClose}>
            <div
                className={`rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl p-4 md:p-8 lg:p-12 border relative animate-in zoom-in-95 duration-300 flex flex-col transition-colors ${isLight ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'}`}
                style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)' }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    className={`absolute top-3 right-3 sm:top-5 sm:right-5 md:top-7 md:right-7 p-2 rounded-full transition-colors ${isLight ? 'text-gray-400 hover:text-gray-700 bg-white/80 hover:bg-blue-100' : 'text-gray-400 hover:text-gray-200 bg-gray-900/80 hover:bg-blue-800'}`}
                    onClick={onClose}
                    aria-label="Close"
                >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-black font-mono mb-2 tracking-tight ${isLight ? 'text-gray-800' : 'text-gray-100'}`} style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
                    Bike Riding Adventures
                </h3>
                <p className={`mb-4 sm:mb-6 font-mono text-sm sm:text-base leading-relaxed px-1 sm:px-2 font-semibold ${isLight ? 'text-blue-700' : 'text-blue-400'}`}>
                    I love dual sport bikes and hitting the trails—especially in Nepal!<br />
                </p>
                <div className="relative">
                    {canScrollLeft && (
                        <button
                            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 shadow transition-colors ${isLight ? 'bg-white/80 hover:bg-blue-100 text-blue-700' : 'bg-gray-900/80 hover:bg-blue-900 text-blue-400'}`}
                            style={{ marginLeft: -16 }}
                            onClick={() => scrollBy("left")}
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                        </button>
                    )}
                    {canScrollRight && (
                        <button
                            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 shadow transition-colors ${isLight ? 'bg-white/80 hover:bg-blue-100 text-blue-700' : 'bg-gray-900/80 hover:bg-blue-900 text-blue-400'}`}
                            style={{ marginRight: -16 }}
                            onClick={() => scrollBy("right")}
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                        </button>
                    )}
                    <div
                        ref={galleryRef}
                        className={`flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-2 px-0 sm:px-1 md:px-2 justify-start scrollbar-thin ${isLight ? 'scrollbar-thumb-gray-300' : 'dark:scrollbar-thumb-gray-700'}`}
                        style={{ minHeight: 128, maxHeight: 288 }}
                    >
                        {photos.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Bike trail photo ${i + 1}`}
                                className="w-40 h-32 sm:w-64 sm:h-48 md:w-80 md:h-60 lg:w-96 lg:h-72 object-cover rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md transition-transform hover:scale-105 flex-shrink-0 cursor-zoom-in"
                                style={{ minWidth: 160, minHeight: 128 }}
                                onClick={() => setZoomed(i)}
                            />
                        ))}
                    </div>
                    <div className={`pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-12 md:w-16 bg-gradient-to-l ${isLight ? 'from-white' : 'from-gray-900'} to-transparent`} style={{ zIndex: 2 }} />
                </div>
            </div>
            {zoomed !== null && (
                <div className={`fixed inset-0 z-60 flex items-center justify-center ${isLight ? 'bg-black/30' : 'bg-black/80'}`} onClick={() => setZoomed(null)}>
                    <img
                        src={photos[zoomed]}
                        alt={`Bike trail photo ${zoomed + 1}`}
                        className="rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl animate-in zoom-in-95 duration-200 cursor-zoom-out m-auto w-[90vw] max-w-lg sm:max-w-xl md:max-w-2xl h-auto"
                        style={{ background: '#222', maxHeight: '80vh' }}
                        width={800}
                        height={800}
                    />
                    <button
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-2 sm:p-3 rounded-full transition-colors"
                        onClick={e => { e.stopPropagation(); setZoomed(null); }}
                        aria-label="Close zoomed image"
                    >
                        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
} 