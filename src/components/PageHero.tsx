'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface PageHeroProps {
    image: string;
    imageAlt: string;
    subtitle: string;
    title: string;
    description: string;
}

export default function PageHero({
    image,
    imageAlt,
    subtitle,
    title,
    description,
}: PageHeroProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        >
            {/* Parallax + zoom background */}
            <motion.div className="absolute inset-0" style={{ y }}>
                <motion.div className="relative w-full h-full" style={{ scale }}>
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center text-white px-4 pt-20"
                style={{ opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block text-sm font-medium text-primary-300 tracking-widest uppercase mb-4">
                        {subtitle}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif mb-6">{title}</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        {description}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}