import Menu from "../Icon/Menu.js"
import Terror from "../Icon/Terror.js"
import { motion } from "framer-motion"
import react, { useState } from "react"
import Link from 'next/link'
export default function MenuMobile() {

    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    const variants = {
        hidden: {
            scale: .5,

        },
        visible: {
            scale: 33
        }
    };

    const left = {
        hidden: {
            rotate: 0,


        },
        visible: {
            rotate: 45,
        }

    };
    const right = {
        hidden: {
            rotate: 0,

        },
        visible: {
            rotate: -45
        }

    };


    function LinkMenuMobile({ href, text }) {
        return <div
            className="uppercase font-Beastly text-Light-Green text-3xl border-solid border-b-2 py-4 border-Light-Green"
        >
            <Link href={href}>
                <a> {text} </a>
            </Link>
        </div>
    }

    return <>
        <div
            className={`fixed top-0 left-0  p-7 w-full h-full z-20 ${!isOpen&&'hidden'}`}
        >
            <div className="border-solid border-b-2 py-4 border-Light-Green">
                <Terror color="#EDDFD0" />
            </div>
            <LinkMenuMobile href="/" text="HOME" />
            <LinkMenuMobile href="/categoria-produto" text="Produtos" />
            <LinkMenuMobile href="/contato" text="Contato" />
            <LinkMenuMobile href="/onde-comprar" text="Onde Comprar" />
        </div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={variants}
            className="lg:hidden z-10 fixed bottom-5 left-5 bg-Dark-Green rounded-full p-7"
        > </motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={left}
            className={`lg:hidden z-20 w-8 bg-Dark-Green h-1 fixed ${isOpen ? 'bottom-11' : 'bottom-14'} -transition-all left-8`}
        ></motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={left}
            className={`lg:hidden z-20 w-8 bg-Dark-Green h-1 fixed ${isOpen ? 'bottom-11' : 'bottom-11'} -transition-all left-8`}
        ></motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={right}
            className={`lg:hidden z-20 w-8 bg-Dark-Green h-1 fixed ${isOpen ? 'bottom-11' : 'bottom-8'} -transition-all left-8`}
        ></motion.div>
        <div
            onClick={toggleMenu}
            className="lg:hidden z-30 fixed bottom-5 left-5  rounded-full p-7"
        > </div>
        <div
            className="lg:hidden z-10 bg-Light-Green fixed bottom-5 left-5  rounded-full p-7"
        > </div>
    </>
}