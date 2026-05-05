"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const CoinFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, animationDirection: "normal" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side (Photo Area) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-background to-primary/5 backdrop-blur-3xl shadow-[0_0_50px_rgba(255,106,0,0.2)] flex items-center justify-center overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-primary/40 font-black uppercase tracking-[0.2em] text-center px-4">
            [ Neural-X // <br/> User Identity ]
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,106,0,0.1)_0%,transparent_70%)] animate-pulse"></div>
        </div>

        {/* Back Side (Info Area) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-full border-2 border-primary/20 bg-primary backdrop-blur-3xl shadow-[0_0_50px_rgba(255,106,0,0.4)] flex items-center justify-center overflow-hidden p-8"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-primary-foreground text-center space-y-4">
            <h4 className="font-black uppercase tracking-[0.1em] text-xl border-b border-primary-foreground/20 pb-2">User Profile</h4>
            <div className="text-sm font-bold tracking-tight opacity-90 leading-relaxed">
              <p>System: Humanoid // V-1.0</p>
              <p>Specialty: Logic & Design</p>
              <p>Mission: Building Futures</p>
            </div>
            <div className="pt-4 text-[10px] font-black uppercase tracking-widest opacity-60">
              Click to return
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
