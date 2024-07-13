import '../assets/css/header.css';
import { FaPaperPlane } from "react-icons/fa";
import { LiaGripLinesSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <nav className='container'>
                    <div className="logo">Jobbin</div>
                    <div className="nav_links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a className='btn_dark' href="#">Post a Job <FaPaperPlane /></a></li>
                        </ul>
                    </div>
                    <div className="btn_dark mob_btn_pill" onClick={toggleMenu}>
                        {isOpen ? <IoCloseOutline /> : <LiaGripLinesSolid />}
                    </div>
                </nav>
            </header>
            <motion.div
                className="mob_nav_links"
                initial={{ y: '-100%' }}
                animate={{ y: isOpen ? '0%' : '-100%' }}
                transition={{ type: 'tween', duration: 0.25 }}
                style={{ zIndex: 2 }}
            >
                <nav className="container">
                    <a href="#">Home</a>
                    <a href="#">Jobs</a>
                    <a className='btn_dark' href="#">Post a Job <FaPaperPlane /></a>
                </nav>
            </motion.div>

            <AnimatePresence >
                {isOpen && (
                    <motion.div
                        className="filter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.25 }}
                        style={{ pointerEvents: isOpen ? 'auto' : 'none', zIndex: 1 }}
                    />
                )}
            </AnimatePresence >

        </>
    );
}
