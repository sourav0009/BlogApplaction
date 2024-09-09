"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo__1.webp";
import { useCallback, useEffect, useRef, useState } from "react";
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import MobileMenu from "./ui/mobilemenu";


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);
    const [showBlogsDropdown, setShowBlogsDropdown] = useState<boolean>(false);

    const searchRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);
   
    const toggleMenu = useCallback(() => {
        setShowMobileMenu(!showMobileMenu);
    }, [showMobileMenu]);

    const toggleSearch = useCallback(() => {
        setShowMobileSearch(!showMobileSearch);
    }, [showMobileSearch]);

    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    const handleMenuLinkClick = () => {
        if (window.innerWidth <= 768) {
            setShowMobileMenu(false);
        }
    };

    const handleBlogsDropdown = () => {
        setShowBlogsDropdown(!showBlogsDropdown);
    };

    const handleDropdownLinkClick = () => {
        // Close the dropdown when a link is clicked
        setShowBlogsDropdown(false);
    };

    // Detect clicks outside the dropdown and close the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if click is outside the dropdown or the dropdown button
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest('button')
            ) {
                setShowBlogsDropdown(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowMobileSearch(false);
            }
        };

        // Add event listener for clicks outside
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Cleanup event listener when component is unmounted
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef, searchRef]);

    return (
        <>
            <nav id="navbar" className=" z-50 md:px-20 border-gray-200 bg-inherit fixed top-0 w-full ">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse ">
                        <Image className="rounded-full" height={50} width={50} src={logo} alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            BLOG COMMUNITY
                        </span>
                    </a>
                    <div className="flex md:order-2">
                        {/* Search button for mobile */}
                        <button
                            id="Searchmanue"
                            type="button"
                            onClick={toggleSearch}
                            aria-controls="navbar-search"
                            aria-expanded={showMobileSearch}
                            className="md:hidden text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>

                        {/* Mobile search bar visibility */}
                        {showMobileSearch && (
                            <div ref={searchRef} className="absolute top-16 left-0 w-full dark:bg-gray-800 p-4 shadow-md">
                                <input
                                    type="text"
                                    id="mobile-search-navbar"
                                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                />
                            </div>
                        )}

                        <div className="relative hidden md:block overflow-hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <PlaceholdersAndVanishInput
                                placeholders={placeholders}
                                onChange={handleChange}
                                onSubmit={onSubmit}
                            />
                        </div>

                        <button
                            onClick={() => toggleMenu()}
                            id="hamburgermenu"
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <ul className="text-white flex flex-row space-x-10 text-lg">
                            <Link href={"/"} onClick={handleMenuLinkClick}>
                                <li className="hover:text-blue-500 cursor-pointer duration-300 transition-all ease-in-out">Home</li>
                            </Link>
                            {/* Dropdown Blogs section */}
                            <li className="relative">
                                <button
                                    onClick={handleBlogsDropdown}
                                    className="hover:text-blue-500 cursor-pointer duration-300 transition-all ease-in-out"
                                >
                                    Blogs
                                </button>
                                {showBlogsDropdown && (
                                    <ul ref={dropdownRef} className="absolute left-0 mt-2 w-36 bg-black text-white rounded-lg shadow-lg group-hover:block">
                                        <Link href={"/blogs/stocks"} onClick={handleDropdownLinkClick}>
                                            <li className="px-4 py-2 hover:bg-gray-800 hover:rounded-lg cursor-pointer">Stocks</li>
                                        </Link>
                                        <Link href={"/blogs/sports"} onClick={handleDropdownLinkClick}>
                                            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Sports</li>
                                        </Link>
                                        <Link href={"/blogs/other-news"} onClick={handleDropdownLinkClick}>
                                            <li className="px-4 py-2 hover:bg-gray-800 hover:rounded-lg cursor-pointer">Other News</li>
                                        </Link>
                                    </ul>
                                )}
                            </li>
                            <Link href={"/dashboard"} onClick={handleMenuLinkClick}>
                                <li className="hover:text-blue-500 cursor-pointer duration-300 transition-all ease-in-out">Dashboard</li>
                            </Link>
                            <Link href={"/about"} onClick={handleMenuLinkClick}>
                                <li className="hover:text-blue-500 cursor-pointer duration-300 transition-all ease-in-out">About</li>
                            </Link>
                            <Link href={"/contact"} onClick={handleMenuLinkClick}>
                                <li className="hover:text-blue-500 cursor-pointer duration-300 transition-all ease-in-out">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            {showMobileMenu && <MobileMenu />}
        </>
    );
};

export default Navbar;