import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { notices } from '../data/notices';

const NoticeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const notice = notices.find(n => n.id === parseInt(id));

    if (!notice) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h2 className="text-2xl font-bold mb-4">존재하지 않는 게시글입니다.</h2>
                <button
                    onClick={() => navigate('/notice')}
                    className="text-primary-600 hover:underline inline-flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> 목록으로 돌아가기
                </button>
            </div>
        );
    }

    return (
        <div className="bg-[#f8fafc] min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link to="/notice" className="text-secondary-500 hover:text-primary-600 flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        목록으로 돌아가기
                    </Link>
                </motion.div>

                {/* Post Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-secondary-100 mb-8"
                >
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${notice.category === '공지' ? 'bg-primary-50 text-primary-700 ring-primary-600/20' :
                                notice.category === '모집' ? 'bg-green-50 text-green-700 ring-green-600/20' :
                                    'bg-secondary-100 text-secondary-700 ring-secondary-600/20'
                            }`}>
                            {notice.category}
                        </span>
                        <div className="flex items-center gap-1 text-secondary-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            {notice.date}
                        </div>
                    </div>

                    <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-0 leading-tight">
                        {notice.title}
                    </h1>
                </motion.div>

                {/* Post Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-secondary-100 min-h-[400px]"
                >
                    <div className="prose prose-lg max-w-none text-secondary-700 whitespace-pre-line leading-relaxed">
                        {notice.content}
                    </div>
                </motion.div>

                {/* Footer Nav */}
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => navigate('/notice')}
                        className="px-8 py-3 bg-secondary-900 text-white rounded-full font-bold hover:bg-secondary-800 transition-all shadow-lg"
                    >
                        목록보기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoticeDetail;
