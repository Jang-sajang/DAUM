import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        title: "당신의 가치를 발견하는\n전문적인 여정",
        subtitle: "DAUM 컨설팅은 당신의 숨겨진 잠재력을 찾아\n최고의 성장을 지원합니다.",
        tag: "Career Coaching",
        bg: "bg-gradient-to-br from-secondary-900 to-primary-900"
    },
    {
        id: 2,
        title: "2026 진로 컨설팅\n사전 예약 접수 중",
        subtitle: "직무 전문가와 함께하는 1:1 멘토링과\n커리어 로드맵 설계를 경험하세요.",
        tag: "Event",
        bg: "bg-gradient-to-br from-blue-900 to-indigo-900"
    },
    {
        id: 3,
        title: "변화를 위한\n첫 번째 발걸음",
        subtitle: "모든 위대한 변화는 자기 이해로부터 시작됩니다.\n지금 바로 상담을 신청하세요.",
        tag: "Mindset",
        bg: "bg-gradient-to-br from-indigo-900 to-secondary-900"
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[600px] lg:h-[800px] w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={`absolute inset-0 ${slides[current].bg} flex items-center`}
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20" />
                    <div className="absolute bottom-0 left-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm border border-primary-500/30">
                                {slides[current].tag}
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight whitespace-pre-line">
                                {slides[current].title}
                            </h1>
                            <p className="text-xl text-primary-100/80 mb-10 leading-relaxed whitespace-pre-line">
                                {slides[current].subtitle}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <button className="px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white rounded-full font-semibold transition-all shadow-lg shadow-primary-500/25 flex items-center gap-2 group">
                                        상담 신청하기
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <Link to="/about">
                                    <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all backdrop-blur-md border border-white/30">
                                        서비스 소개
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 transition-all duration-300 rounded-full ${current === index ? "w-8 bg-primary-400" : "w-2 bg-white/30"
                            }`}
                    />
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all backdrop-blur-sm hidden lg:block"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all backdrop-blur-sm hidden lg:block"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
};

export default HeroSlider;
