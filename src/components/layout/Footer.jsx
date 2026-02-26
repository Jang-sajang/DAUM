import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary-50 border-t border-secondary-200">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-2xl font-bold text-primary-600 tracking-tighter">
                            DAUM
                        </Link>
                        <p className="mt-4 text-sm text-secondary-500 max-w-xs">
                            나를 찾아가는 여정, DAUM과 함께하세요. <br />
                            인간관계, 진로, 성향, 인생의 의미를 탐구합니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase">Menu</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="/about" className="text-base text-secondary-500 hover:text-primary-600">
                                    회사소개
                                </Link>
                            </li>
                            <li>
                                <Link to="/notice" className="text-base text-secondary-500 hover:text-primary-600">
                                    공지사항
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-base text-secondary-500 hover:text-primary-600">
                                    문의하기
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-secondary-900 tracking-wider uppercase">Contact</h3>
                        <ul className="mt-4 space-y-4">
                            <li className="text-base text-secondary-500">
                                Email: nadaum54.company@gmail.com
                            </li>
                            <li className="text-base text-secondary-500">
                                Tel: 010-4145-7507
                            </li>
                            <li className="text-base text-secondary-500">
                                사업자번호: 607-28-17515
                            </li>
                            <li className="text-base text-secondary-500">
                                Daegu, Korea
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-secondary-200 pt-8">
                    <p className="text-base text-secondary-400 text-center">
                        &copy; {new Date().getFullYear()} DAUM Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
