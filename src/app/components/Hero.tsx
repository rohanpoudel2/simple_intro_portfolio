"use client";

import { useTheme } from "next-themes";

interface HeroProps {
    name: string;
    title: string;
    location?: string;
    backgroundImage: string;
    lightImage?: string;
}

export default function Hero({ name, title, location, backgroundImage, lightImage }: HeroProps) {
    const { resolvedTheme } = useTheme();
    const bg = resolvedTheme === 'light' && lightImage ? lightImage : backgroundImage;
    return (
        <div className="relative h-[45vh] w-screen ml-[calc(-50vw+50%)] mb-12">
            <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${bg}')`
                }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="max-w-4xl mx-auto px-8 pb-6 md:pb-8">
                    <h1 className="font-mono text-4xl md:text-6xl font-black text-white" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}>
                        / Hi, I'm {name}
                    </h1>
                    <p className="text-xl mt-4 font-mono font-medium text-white/90 flex items-center gap-3 flex-wrap" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}>
                        {title}
                        {location && (
                            <span className="text-base font-normal text-white/90 flex items-center gap-2">
                                <span className="mx-1"> - </span>
                                <span>{location}</span>
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
} 