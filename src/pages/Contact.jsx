import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '개인 상담 문의',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const SERVICE_ID = 'service_mgp7wth';
        const TEMPLATE_ID = 'template_unypv82';
        const PUBLIC_KEY = '4lU7-DCyWM8f7IP0T';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setIsSuccess(true);
                setIsSubmitting(false);
                setFormData({
                    user_name: '',
                    user_email: '',
                    subject: '개인 상담 문의',
                    message: '',
                });
                setTimeout(() => setIsSuccess(false), 5000);
            }, (error) => {
                console.log(error.text);
                alert('메일 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
                setIsSubmitting(false);
            });
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full font-bold text-sm mb-4">
                        <MessageSquare className="w-4 h-4" />
                        Contact Us
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">당신의 목소리를 들려주세요</h1>
                    <p className="text-lg text-secondary-600 leading-relaxed">
                        상담 예약, 기업 강의, 혹은 단순한 질문이라도 좋습니다.<br />
                        청년들의 모든 고민에 다움이 정성껏 답변해 드리겠습니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                    <div className="lg:col-span-4 space-y-4">
                        {[
                            { icon: Mail, label: "이메일", value: "contact@daum-consulting.com", color: "text-blue-500" },
                            { icon: Phone, label: "전화번호", value: "02-1234-5678", color: "text-indigo-500" },
                            { icon: MapPin, label: "찾아오시는 길", value: "서울특별시 강남구 테헤란로 123 DAUM 빌딩 4층", color: "text-purple-500" },
                        ].map((info, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-3xl border border-secondary-100 bg-white/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                        <info.icon className={`w-5 h-5 ${info.color}`} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-bold text-secondary-400 mb-0.5">{info.label}</p>
                                        <p className="text-secondary-800 font-medium text-sm break-all">{info.value}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-secondary-900 p-8 rounded-[32px] text-white relative overflow-hidden mt-6"
                        >
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary-400" />
                                운영 안내
                            </h3>
                            <div className="space-y-4 text-secondary-400 text-sm">
                                <div className="flex justify-between">
                                    <span>평일</span>
                                    <span className="text-white">09:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>점심시간</span>
                                    <span className="text-white">12:00 - 13:00</span>
                                </div>
                                <div className="border-t border-white/5 pt-4 mt-4">
                                    <p>주말 및 공휴일은 휴무입니다.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white p-8 lg:p-12 rounded-[40px] border border-secondary-100 relative shadow-sm"
                        >
                            {isSuccess ? (
                                <div className="text-center py-20">
                                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                    <h2 className="text-2xl font-bold text-secondary-900 mb-2">메시지가 전송되었습니다!</h2>
                                    <p className="text-secondary-600">다움에서 확인 후 조속히 연락드리겠습니다.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-8 text-primary-600 font-bold hover:underline"
                                    >
                                        새 문의 작성하기
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-secondary-900 mb-8">문의사항 작성</h2>
                                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary-500 ml-1">성함</label>
                                                <input
                                                    type="text"
                                                    name="user_name"
                                                    required
                                                    value={formData.user_name}
                                                    onChange={handleChange}
                                                    placeholder="이름을 입력해 주세요"
                                                    className="w-full bg-secondary-50 border border-secondary-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary-500 ml-1">이메일 주소</label>
                                                <input
                                                    type="email"
                                                    name="user_email"
                                                    required
                                                    value={formData.user_email}
                                                    onChange={handleChange}
                                                    placeholder="example@email.com"
                                                    className="w-full bg-secondary-50 border border-secondary-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-secondary-500 ml-1">문의 유형</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-secondary-50 border border-secondary-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all outline-none appearance-none cursor-pointer"
                                            >
                                                <option value="개인 상담 문의">개인 상담 문의</option>
                                                <option value="기업 출강/워크샵 문의">기업 출강/워크샵 문의</option>
                                                <option value="커리어 컨설팅">커리어 컨설팅</option>
                                                <option value="기타">기타</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-secondary-500 ml-1">내용</label>
                                            <textarea
                                                rows="6"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="상담받고 싶은 내용이나 궁금한 점을 적어주세요"
                                                className="w-full bg-secondary-50 border border-secondary-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all outline-none resize-none"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-5 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 group shadow-lg shadow-primary-500/10 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? '전송 중...' : '문의하기'}
                                            <Send className={`w-5 h-5 ${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform`} />
                                        </button>
                                        <p className="text-[10px] text-secondary-400 text-center mt-4">
                                            전송 시 다움의 개인정보 처리방침에 동의하는 것으로 간주됩니다.
                                        </p>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
