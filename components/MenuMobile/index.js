import Menu from "../Icon/Menu.js"
import Terror from "../Icon/Terror.js"
import { motion } from "framer-motion"
import react, { useState } from "react"
import Link from 'next/link'

export default function MenuMobile({ colorTheme, colorFont, categories }) {

    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    const [isOpenSub, setIsOpenSub] = useState(true)

    function toggleMenuSub() {
        setIsOpenSub(!isOpenSub)
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

    const boxVar = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                delayChildren: 0.5,
                staggerDirection: -1
            }
        },
    }

    const listCategories = [
        { text: "jardinagem urbana", href: "/" },
        { text: "cultivo indoors", href: "/" },
        { text: "fertilizantes", href: "/" },
        { text: "acessórios", href: "/" },
    ]

    function LinkSubMenuMobile({ href, text, color }) {
        return <div
            className={'font-TTHovesRegular text-xs py-2'}
            style={{
                color
            }}
        >
            <Link href={href}>
                <a> {text} </a>
            </Link>
        </div>
    }

    function LinkMenuMobile({ href, text, sub, color }) {
        return <div
            className={'uppercase font-Beastly  text-3xl border-solid border-b-2 py-4'}
            key={Math.random()}
            style={{
                color,
                borderColor: color,
            }}
        >
            <Link href={href}>
                <a className="flex justify-between" >
                    {text}
                    {sub && <span onClick={toggleMenuSub}> * </span>}
                </a>
            </Link>
            <div className={`${isOpenSub && 'hidden'}`}>
                {sub && sub.map(c => <div key={Math.random()}><LinkSubMenuMobile   {...c} /></div>)}
            </div>
        </div>
    }

    return <>
        <motion.div
            animate={isOpen ? "visible" : "hidden"}
            variants={boxVar}
            className={`fixed top-0 left-0  p-7 w-full h-full z-20 ${!isOpen && 'hidden'}`}
        >
            <div
                className={'border-solid border-b-2 py-4 '}
                style={{
                    borderColor: colorFont
                }}
            >
                <Terror color={colorFont} />
            </div>
            <LinkMenuMobile key="home" color={colorFont} href="/" text="HOME" />
            <LinkMenuMobile key="produtos" color={colorFont} href="#" text="Produtos" sub={listCategories} />
            <LinkMenuMobile key="contato" color={colorFont} href="/contato" text="Contato" />
            <LinkMenuMobile key="onde-comprar" color={colorFont} href="/onde-comprar" text="Onde Comprar" />
        </motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={variants}
            className="lg:hidden z-10 fixed bottom-5 left-5 bg-Dark-Green rounded-full p-7"
            style={{
                backgroundColor: colorTheme
            }}
        > </motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={left}
            className={`lg:hidden z-20 w-8 bg-Dark-Green h-1 fixed ${isOpen ? 'bottom-11' : 'bottom-14'} -transition-all left-8`}
            style={{
                backgroundColor: colorFont
            }}
        ></motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={left}
            className={`lg:hidden z-20 w-8 bg-Dark-Green h-1 fixed ${isOpen ? 'bottom-11' : 'bottom-11'} -transition-all left-8`}
            style={{
                backgroundColor: colorFont
            }}
        ></motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={right}
            className={`lg:hidden z-20 w-8 bg-Dark-Green h-1 fixed ${isOpen ? 'bottom-11' : 'bottom-8'} -transition-all left-8`}
            style={{
                backgroundColor: colorFont
            }}
        ></motion.div>
        <div
            onClick={toggleMenu}
            className="lg:hidden z-30 fixed bottom-5 left-5  rounded-full p-7"
        > </div>
        <div
            className="lg:hidden z-10 fixed bottom-5 left-5  rounded-full p-7"
            style={{
                backgroundColor: colorTheme
            }}
        > </div>
    </>
}