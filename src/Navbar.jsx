import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ activeSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled
                    ? "backdrop-blur-md bg-gradient-to-r from-blue-500/80 via-purple-500/70 to-pink-500/80 shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
                {/* Logo */}
                <div
                    onClick={() => scrollToSection("home")}
                    className="text-2xl font-extrabold cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                >
                    Chirag.dev
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-8 font-medium text-white drop-shadow-md">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`cursor-pointer relative group ${activeSection === item.id ? "font-semibold" : ""
                                }`}
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-gradient-to-b from-blue-500/90 via-purple-500/90 to-pink-500/90 backdrop-blur-md shadow-lg"
                >
                    <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-white">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`cursor-pointer ${activeSection === item.id ? "font-semibold underline" : ""
                                    }`}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );

}
