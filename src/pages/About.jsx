import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Eye, MoveRight, Sparkles, Users2, Rocket } from 'lucide-react';

const About = () => {
    const philosophy = [
        {
            letter: 'D',
            name: 'Discover(발견)',
            desc: '청년들 각자가 가진 고유한 색깔과 잠재된 강점을 객관적으로 발견합니다.',
            icon: Eye,
            gradient: 'from-blue-500 to-cyan-400'
        },
        {
            letter: 'A',
            name: 'Accept(수용)',
            desc: '타인의 시선이 아닌, 있는 그대로의 나를 긍정하고 사랑하는 마음을 기릅니다.',
            icon: Heart,
            gradient: 'from-pink-500 to-rose-400'
        },
        {
            letter: 'U',
            name: 'Understand(이해)',
            desc: '내가 진정으로 원하는 것이 무엇인지 깊이 있게 이해하고 정리합니다.',
            icon: Target,
            gradient: 'from-indigo-500 to-purple-400'
        },
        {
            letter: 'M',
            name: 'Move(나아감)',
            desc: '나다움을 바탕으로 세상 속에 당당히 나아가는 구체적인 발걸음을 뗍니다.',
            icon: MoveRight,
            gradient: 'from-emerald-500 to-teal-400'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="bg-[#f8fafc]">
            {/* Simple Header */}
            <section className="pt-32 pb-16 bg-white border-b border-secondary-100">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-4 block">Our Identity</span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight text-balance">
                            청년들이 <span className="text-gradient">나다움</span>을 찾아가는 여정, 다움
                        </h1>
                        <p className="text-lg lg:text-xl text-secondary-600 leading-relaxed max-w-4xl text-pretty">
                            '다움'은 정해진 답을 강요하지 않습니다. 우리는 청년들이 사회가 정한 기준이 아닌 자신만의 고유한 빛을 발견하고 그 가치를 실현해나갈 수 있도록 함께 고민하는 청년 지원 커뮤니티입니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story / Mission */}
            <section className="section-padding overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full font-bold text-sm">
                                <Sparkles className="w-4 h-4" />
                                Our Story
                            </div>
                            <h2 className="text-4xl font-bold text-secondary-1000 leading-tight text-balance">
                                청년들의 고민에서 시작된 <span className="text-primary-600">진심</span>
                            </h2>
                            <div className="space-y-6 text-secondary-600 text-lg leading-relaxed">
                                <p>
                                    세상은 우리에게 '취업', '성공', '결과'만을 이야기합니다. 하지만 우리는 묻고 싶었습니다.
                                    <span className="font-bold text-secondary-900"> "그래서, 당신은 어떤 사람인가요?"</span>
                                </p>
                                <p>
                                    '다움'은 이 질문에 대한 해답을 찾기 위해 모인 청년 단체에서 출발했습니다.
                                    우리는 청년들이 겪는 막막함과 불안함이 단순한 개인의 문제가 아닌,
                                    자신을 깊이 들여다볼 기회가 없었기 때문이라고 생각합니다.
                                </p>
                                <p>
                                    진로, 인간관계, 자아정체성... 청년들이 마주한 모든 고민을 함께 나누고
                                    더 나은 내일을 위해 연대하는 것이 우리의 시작이자 이유입니다.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-48 bg-primary-100 rounded-[30px] flex items-center justify-center">
                                        <Users2 className="w-12 h-12 text-primary-500" />
                                    </div>
                                    <div className="h-64 bg-secondary-900 rounded-[30px] p-8 text-white flex flex-col justify-end">
                                        <span className="text-3xl font-bold mb-2">1,500+</span>
                                        <span className="text-sm text-secondary-400">함께한 청년들</span>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-64 bg-indigo-500 rounded-[30px] p-8 text-white flex flex-col justify-end">
                                        <Rocket className="w-12 h-12 mb-4" />
                                        <span className="font-bold">성장의 가속도</span>
                                    </div>
                                    <div className="h-48 bg-secondary-100 rounded-[30px] flex items-center justify-center">
                                        <span className="text-secondary-400 font-bold italic">Be Yourself</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-100/30 rounded-full blur-[100px]" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section-padding bg-white border-y border-secondary-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary-600 font-bold tracking-widest text-sm uppercase mb-4 block"
                        >
                            D.A.U.M Philosophy
                        </motion.span>
                        <h2 className="text-4xl font-bold text-secondary-900 mb-6 text-balance">'나다움'을 완성하는 4가지 단계</h2>
                        <p className="text-secondary-600 text-pretty">
                            우리는 단순한 스펙 쌓기가 아닌, 내면의 성장을 통해 흔들리지 않는 당신만의 가치를 세우는 과정을 함께합니다.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {philosophy.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="glass-card p-10 rounded-[40px] hover:-translate-y-3 transition-all duration-300 group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-6xl font-black text-secondary-50 absolute top-8 right-8 z-[-1] leading-none opacity-50">
                                    {item.letter}
                                </span>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{item.name}</h3>
                                <p className="text-secondary-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 bg-secondary-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight text-balance">
                            청년 모두가 자신의 삶에서 <span className="text-primary-400">주인공</span>이 되는 세상
                        </h2>
                        <p className="text-xl text-secondary-400 leading-relaxed mb-12">
                            '다움'이 꿈꾸는 내일은 멀리 있지 않습니다.
                            한 사람의 청년이 '나다움'을 깨닫고 빛나는 것,
                            그 작은 변화가 모여 세상을 더 따뜻하게 만들 것이라 확신합니다.
                        </p>
                        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
