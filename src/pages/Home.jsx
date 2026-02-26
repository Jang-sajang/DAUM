import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Heart, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/ui/HeroSlider';

const Home = () => {
    const features = [
        {
            name: '인간관계',
            description: '갈등을 넘어 진정한 소통으로 나아가는 관계의 기술을 코칭합니다.',
            icon: Users,
            color: 'bg-blue-500'
        },
        {
            name: '진로 탐색',
            description: '나의 강점을 발견하고, 가슴 뛰는 커리어 패스를 함께 설계합니다.',
            icon: Briefcase,
            color: 'bg-indigo-500'
        },
        {
            name: '자아 발견',
            description: '남들의 시선이나 사회적 기준이 아닌, 내가 진짜 원하는 것을 찾아 흔들리지 않는 삶의 기준을 만듭니다.',
            icon: Heart,
            color: 'bg-purple-500'
        },
        {
            name: '인생의 의미',
            description: '삶의 가치와 목적을 재정립하여 흔들리지 않는 중심을 세웁니다.',
            icon: Lightbulb,
            color: 'bg-amber-500'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="bg-[#f8fafc]">
            {/* Hero Section - Slider */}
            <HeroSlider />

            {/* Features Section */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-20">
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-4 block"
                        >
                            Specialized Solutions
                        </motion.span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight text-balance">
                            당신의 삶을 변화시키는 <span className="text-gradient">네 가지 핵심 가이드</span>
                        </h2>
                        <p className="text-xl text-secondary-600 text-pretty">
                            DAUM은 단순한 조언을 넘어, 구체적인 데이터와 따뜻한 공감을 통해 당신만의 정답을 찾아가는 길을 함께 걷습니다.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-4">{feature.name}</h3>
                                <p className="text-secondary-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-secondary-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight text-balance">
                                왜 <span className="text-primary-400">DAUM</span>인가요?
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { title: "데이터 기반 코칭", desc: "검증된 심리 도구와 통계 데이터를 바탕으로 객관적인 분석을 제안합니다." },
                                    { title: "1:1 밀착 관리", desc: "상담 이후에도 스스로 방향을 잡을 수 있을 때까지 체계적으로 관리합니다." },
                                    { title: "전문가 네트워크", desc: "각 분야를 대표하는 최고의 전문가들이 당신의 팀이 되어 드립니다." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-secondary-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-gradient-to-tr from-primary-600/20 to-indigo-600/20 rounded-full flex items-center justify-center border border-white/10 p-12">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-primary-400 mb-4">12+</div>
                                    <div className="text-xl text-secondary-300">Years of Experience</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Recent Events Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="text-primary-600 font-bold text-sm block mb-4"
                            >
                                Latest News
                            </motion.span>
                            <h2 className="text-4xl font-bold text-secondary-900">최근 행사 공지</h2>
                        </div>
                        <Link to="/notice">
                            <button className="px-6 py-3 border border-secondary-200 text-secondary-600 rounded-full hover:bg-secondary-50 transition-all flex items-center gap-2 group">
                                전체 일정 보기
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "나다움 취업 특강", date: "2026.02.25", desc: "DAUM이 제안하는 취업을 향한 첫걸음, 면접 특강과 함께 변화를 시작해 보세요.", image: "/images/행사이미지1.png" },
                            { title: "1:1 집중 멘토링", date: "2026.01.15", desc: "전문 상담사와 함께 나의 강점과 가치를 발견하고, 맞춤형 커리어 로드맵을 설계합니다.", image: "/images/행사이미지2.png" },
                            { title: "인사이트 플래닝", date: "2025.12.20", desc: "복잡한 생각들을 정리하고 구체적인 액션 플랜을 세우는 시간, 성장을 위한 기록을 시작합니다.", image: "/images/행사이미지3.png" }
                        ].map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/10] bg-secondary-100 rounded-3xl mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-500" />
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">{event.title}</h3>
                                <p className="text-sm text-primary-600 font-medium mb-3">{event.date}</p>
                                <p className="text-secondary-600 leading-relaxed">{event.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="bg-secondary-900 rounded-[40px] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-secondary-900/10 border border-white/5"
                    >
                        {/* Decorative Blurs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight text-balance">
                                당신에게 가장 필요한 <span className="text-primary-400">DAUM</span>은 무엇인가요?
                            </h2>
                            <p className="text-xl text-secondary-300 mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed text-pretty">
                                지금, 변화를 꿈꾼다면 DAUM과 상담하세요. 당신의 가능성을 현실로 만들어 드립니다.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact">
                                    <button className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-500 transition-all shadow-xl shadow-primary-600/20 active:scale-95">
                                        무료 상담 예약하기
                                    </button>
                                </Link>
                                <button className="px-10 py-5 bg-transparent text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/5 transition-all active:scale-95">
                                    진로 진단 받기
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
