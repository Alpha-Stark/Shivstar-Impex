"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Flex, Heading, Text, useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, IconButton } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import { MydrawerContent } from "./MydrawerContent";
// import { useDispatch, useSelector } from "react-redux";
// import { LOGOUT } from "../Store/actiontype";
import styles from "../style/navbar.module.css";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import logo from "../ShivstarLogo.png";
import Image from "next/image";
import Link from "next/link";

export const Navbar = ({ setQuery }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    /* const { isAuth } = useSelector((st) => st); */
    /* const dispatch = useDispatch();
    const navigate = useNavigate(); */

    return (
        <>
            <div className={`${styles.navbaronly} flex flex-col md:flex-row items-center justify-between p-4 h-[10vh] w-full z-10`}>
                <div className="flex items-center justify-between w-full md:w-auto mb-2 md:mb-0">
                    {/* Toggle button example */}
                    {/* <IconButton display={{ base: "flex", md: "none" }} onClick={isOpen ? onClose : onOpen} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} variant="ghost" color="white" aria-label="Toggle Navigation" /> */}
                    <Link href="/" /* as={NavLink} */ className="flex items-center p-1">
                        <Image src={logo} alt="Logo" width={85} height={55} />
                        <h4 className="text-white text-lg md:text-2xl ml-2 md:ml-4">SHIVSTAR IMPEX</h4>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row md:ml-4">
                    <Link href="/contactUs" className="my-1 md:my-0 mx-2 md:mx-4 p-1 text-white text-sm md:text-lg">
                        Diamonds
                    </Link>
                    <Link href="/account" className="my-1 md:my-0 mx-2 md:mx-4 p-1 text-white text-sm md:text-lg">
                        Watches
                    </Link>
                    <Link href="/bag" className="my-1 md:my-0 mx-2 md:mx-4 p-1 text-white text-sm md:text-lg">
                        Gift
                    </Link>
                    <Link href="/contactUs" className="my-1 md:my-0 mx-2 md:mx-4 p-1 text-white text-sm md:text-lg">
                        Contact
                    </Link>
                    <Link href="/account" className="my-1 md:my-0 mx-2 md:mx-4 p-1 text-white text-sm md:text-lg">
                        Account
                    </Link>
                    <Link href="/bag" className="my-1 md:my-0 mx-2 md:mx-4 p-1 text-white text-sm md:text-lg">
                        Bag
                    </Link>
                </div>
                <SignedOut>
                    <SignInButton>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            Sign-In
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </>
    );
};

{
    /* <SignedOut>
        <SignInButton>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Sign-In
            </button>
            
        </SignInButton>
    </SignedOut>
    <SignedIn>
        <UserButton />
    </SignedIn> */
}

{
    /* <Button
        display={{ base: "none", md: "flex" }}
        colorScheme="white"
        variant="ghost"
        color="white"
        onClick={() => {
            isAuth ? dispatch({ type: LOGOUT }) : navigate("/account");
        }}
    >
        {isAuth ? "Logout" : "Login"}
    </Button> */
}
