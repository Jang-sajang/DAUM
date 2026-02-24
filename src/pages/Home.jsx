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
            name: '성향 분석',
            description: 'MBTI, 에니어그램 등 검증된 도구를 통해 나를 깊이 있게 이해합니다.',
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

            {/* Trusted By / Statistics */}
            <section className="py-12 bg-white border-b border-secondary-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2"><span className="text-2xl font-bold text-secondary-900">1,000+</span> <span className="text-sm">성공 사례</span></div>
                        <div className="flex items-center gap-2"><span className="text-2xl font-bold text-secondary-900">98%</span> <span className="text-sm">고객 만족도</span></div>
                        <div className="flex items-center gap-2"><span className="text-2xl font-bold text-secondary-900">12년</span> <span className="text-sm">전문 경력</span></div>
                    </div>
                </div>
            </section>

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
                        <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
                            당신의 삶을 변화시키는<br />
                            <span className="text-gradient">네 가지 핵심 가이드</span>
                        </h2>
                        <p className="text-xl text-secondary-600">
                            DAUM은 단순한 조언을 넘어, 구체적인 데이터와 따뜻한 공감을 통해<br />
                            당신만의 정답을 찾아가는 길을 함께 걷습니다.
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
                            <h2 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight">
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
                            { title: "2024 진로 박람회", date: "2024.12.15 - 12.17", desc: "다양한 직업군의 전문가들과 만나는 특별한 기회" },
                            { title: "멘토링 워크샵", date: "2024.12.20", desc: "현직 전문가와 함께하는 1:1 멘토링 프로그램" },
                            { title: "온라인 특강", date: "2024.12.28", desc: "성공적인 커리어 전환을 위한 실전 노하우" }
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
                                    <div className="w-full h-full flex items-center justify-center text-secondary-300 font-medium">Image Placeholder</div>
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
                            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                당신에게 가장 필요한<br className="hidden md:block" />
                                <span className="text-primary-400">DAUM</span>은 무엇인가요?
                            </h2>
                            <p className="text-xl text-secondary-300 mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
                                지금, 변화를 꿈꾼다면 DAUM과 상담하세요.<br />
                                당신의 가능성을 현실로 만들어 드립니다.
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
