'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import 'animate.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu ouvert/fermé

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fonction pour basculer entre le menu ouvert et fermé
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className={`mt-2 w-[95%] animate__fadeIn fixed top-0 left-0 right-0 flex justify-between items-center px-3 w-full ${isScrolled ? 'h-[50px] bg-white shadow-lg' : 'h-[64px] bg-transparent'} z-50 transition-height duration-500 ease-in-out`} style={{ borderRadius: '10px' }}>
                <div className="m-2">
                    <Image
                        src="/logo/logoCouleur.svg"
                        width={isScrolled ? 120 : 150} // Taille du logo dynamique
                        height={isScrolled ? 120 : 150} // Taille du logo dynamique
                        alt="Logo"
                        className='h-full'
                    />
                </div>
                <div className="flex justify-around h-full items-center">
                    {/* Icône du menu burger */}
                    <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            // Icône de croix
                            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#005467'}}>
                                <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                            </svg>
                        ) : (
                            // Icône du menu burger
                            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#005467'}}>
                                <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                    {/* Liens de navigation (affichés uniquement sur tablette et plus) */}
                    <div className={`hidden md:flex justify-around h-full items-center ${isMenuOpen ? 'opacity-0' : 'opacity-100 transition-opacity duration-500 ease-in-out'}`} style={{ width: '100%', visibility: isMenuOpen ? 'hidden' : 'visible' }}>
                        <Link href="/" className="mx-4 link-item h-full flex items-center" style={{ color: '#005467', fontWeight: 'semibold' }}>
                            Accueil
                        </Link>
                        <Link href="/formules" className="mx-4 link-item h-full flex items-center" style={{ color: '#005467', fontWeight: 'semibold' }}>
                            Formules
                        </Link>
                        <Link href="/devis" className="mx-4 link-item h-full flex items-center" style={{ color: '#005467', fontWeight: 'semibold' }}>
                            Devis
                        </Link>
                    </div>
                </div>
            </div>
            {/* Menu déroulant */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-0 left-0 right-0 bg-white w-full shadow-lg z-50" style={{ animation: isMenuOpen ? 'slideInDown 0.5s forwards' : 'slideOutUp 0.5s forwards', borderRadius: '0px 0px 20px 20px' }}>
                    <div className="flex justify-end mr-4 mt-2">
                        {/* Icône de fermeture */}
                        <div className="cursor-pointer" onClick={toggleMenu}>
                            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#005467'}}>
                                <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-[1.5rem]">
                        <Link href="/" className="mx-4 link-item h-full flex items-center" style={{ color: '#005467', fontWeight: 'semibold' }}>
                            Accueil
                        </Link>
                        <Link href="/formules" className="mx-4 link-item h-full flex items-center" style={{ color: '#005467', fontWeight: 'semibold' }}>
                            Formules
                        </Link>
                        <Link href="/devis" className="mx-4 link-item h-full flex items-center" style={{ color: '#005467', fontWeight: 'semibold' }}>
                            Devis
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
