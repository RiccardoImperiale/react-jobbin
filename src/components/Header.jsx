import '../assets/css/header.css';
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom';
import { FaPaperPlane } from "react-icons/fa";
import { LiaGripLinesSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) => isActive ? 'current_page' : 'inactive'

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <nav className='container'>
                    <NavLink to='/' ><img src={logo} alt="" /></NavLink>
                    <div className="nav_links">
                        <ul>
                            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                            <li><NavLink to="/jobs" className={linkClass}>Jobs</NavLink></li>
                            <li><NavLink className='btn_dark' to="/post-job">Post a Job <FaPaperPlane /></NavLink></li>
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
            >
                <nav className="container">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
                    <NavLink className='btn_dark' to="/post-job">Post a Job <FaPaperPlane /></NavLink>
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
