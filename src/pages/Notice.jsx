import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Megaphone } from 'lucide-react';
import { notices } from '../data/notices';

const Notice = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const noticesPerPage = 5;

    // Sort notices by date descending (newest first)
    const sortedNotices = [...notices].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Calculate pagination indexes
    const indexOfLastNotice = currentPage * noticesPerPage;
    const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
    const currentNotices = sortedNotices.slice(indexOfFirstNotice, indexOfLastNotice);
    const totalPages = Math.ceil(sortedNotices.length / noticesPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full font-bold text-sm mb-4">
                        <Megaphone className="w-4 h-4" />
                        Notice & News
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">공지사항</h1>
                    <p className="text-lg text-secondary-600 max-w-xl mx-auto">
                        다움의 새로운 소식과 안내사항을 가장 먼저 만나보세요.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {currentNotices.map((notice, idx) => (
                        <motion.div
                            key={notice.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link
                                to={`/notice/${notice.id}`}
                                className="group block glass-card p-6 lg:p-8 rounded-[32px] hover:border-primary-300 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase ring-1 ring-inset ${notice.category === '공지' ? 'bg-primary-50 text-primary-700 ring-primary-600/20' :
                                                notice.category === '모집' ? 'bg-green-50 text-green-700 ring-green-600/20' :
                                                    'bg-secondary-100 text-secondary-700 ring-secondary-600/20'
                                                }`}>
                                                {notice.category}
                                            </span>
                                            <div className="flex items-center gap-1 text-secondary-400 text-xs">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {notice.date}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors truncate">
                                            {notice.title}
                                        </h3>
                                    </div>
                                    <div className="hidden sm:flex w-12 h-12 bg-secondary-50 rounded-full items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-16 flex justify-center gap-3">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center font-bold text-sm
                                    ${currentPage === number
                                        ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/20'
                                        : 'bg-white text-secondary-400 border-secondary-200 hover:border-primary-400 hover:text-primary-600'
                                    }`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notice;
