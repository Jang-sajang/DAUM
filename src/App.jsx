import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import Contact from './pages/Contact';
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="notice" element={<Notice />} />
                    <Route path="notice/:id" element={<NoticeDetail />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
            <Analytics />
        </>
    );
}

export default App;
