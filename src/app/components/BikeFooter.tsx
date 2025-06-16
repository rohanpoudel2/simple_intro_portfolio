"use client";
import { useState } from "react";
import { Bike } from "lucide-react";
import BikeModal from "./BikeModal";
import { bikePhotos } from "../content";

export default function BikeFooter() {
    const [open, setOpen] = useState(false);

    const iconWidthRem = 2.5;

    return (
        <div className="relative w-full flex justify-center items-center mt-8" style={{ minHeight: 48 }}>
            <div className="relative w-full h-10" style={{ minHeight: 40 }}>
                <Bike
                    className="w-10 h-10 text-blue-600 dark:text-blue-400 absolute animate-[bikeRide_12s_linear_infinite] group-hover:scale-110 group-hover:drop-shadow-lg transition-transform cursor-pointer"
                    style={{
                        left: 0,
                        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))",
                    }}
                    onClick={() => setOpen(true)}
                />
                <style>{`
          @keyframes bikeRide {
            0%   { left: 0; transform: rotate(-5deg) scale(1); }
            10%  { left: 10%; transform: rotate(-2deg) scale(1); }
            20%  { left: 20%; transform: rotate(-2deg) scale(1.15, 1.05); }
            25%  { left: 25%; transform: rotate(-10deg) scale(1.18, 1.1); }
            30%  { left: 30%; transform: rotate(-2deg) scale(1); }
            50%  { left: 50%; transform: rotate(2deg) scale(1); }
            60%  { left: 60%; transform: rotate(-2deg) scale(1.13, 1.05); }
            65%  { left: 65%; transform: rotate(-12deg) scale(1.2, 1.12); }
            70%  { left: 70%; transform: rotate(-2deg) scale(1); }
            90%  { left: 90%; transform: rotate(-2deg) scale(1); }
            100% { left: calc(100% - ${iconWidthRem}rem); transform: rotate(-5deg) scale(1); }
          }
        `}</style>
            </div>
            <BikeModal open={open} onClose={() => setOpen(false)} photos={bikePhotos} />
        </div>
    );
} 