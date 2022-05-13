import react, { useState } from "react";
import { motion } from "framer-motion"
import Terror from "../Icon/Terror";
import SubMenu from "./SubMenu";
import BgMenu from "../Icon/BgMenu";
import Link from 'next/link'

export default function MyMenu({ categories, bgColor, color }) {
    let bg = bgColor || "#225439"
    let cor = color || "#EDDFD0"
    const base = process.env.NEXT_PUBLIC_URI
    const [isHover, toggleHover] = useState(false);
    const toggleHoverMenu = () => {
        toggleHover(!isHover);
    };
    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.5
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.5,
                delay: 0.3
            },
            transitionEnd: {
                display: "none"
            }
        },
    };
    function LinkMenu({ href, text }) {
        return <Link href={href}>
            <a
                className="font-TTHovesBold text-xl block py-2 pr-4 pl-3 text-Light-Orange md:p-0"
                style={{
                    color: cor
                }}
            >
                {text}
            </a>

        </Link>
    }
    return <>

        <nav
            className="flex flex-row items-center relative bg-Dark-Green h-24"
            style={{
                backgroundColor: bg
            }}
        >
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="basis-1/4 z-10 mx-auto">
                    <motion.div
                        animate={{ x: [15, 0, 15] }}
                        initial={true}
                        transition={{ ease: "easeOut", duration: .5 }}
                    >
                        <Terror color={cor} />
                    </motion.div>
                </div>

                <div className="absolute top-0 left-0 z-0 hidden lg:block">
                    <BgMenu color={bg} />
                </div>

                <div className="basis-3/4 hidden w-full md:block md:w-auto z-10" id="mobile-menu">
                    <div className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <div>
                            <LinkMenu href="/" text="Home" />
                        </div>
                        <div>
                            <motion.div
                                className='{style.menu_item}'
                                onHoverStart={toggleHoverMenu}
                                onHoverEnd={toggleHoverMenu}
                            >
                                <LinkMenu href="/categoria-produto" text="Categorias" />
                                <motion.div
                                    initial="exit"
                                    animate={isHover ? "enter" : "exit"}
                                    variants={subMenuAnimate}
                                >
                                    <SubMenu categories={categories} bgColor={bgColor} color={color} />
                                </motion.div>
                            </motion.div>
                        </div>
                        <div>
                            <LinkMenu href="/contato" text="Contato" />
                        </div>
                        <div>
                            <LinkMenu href="/onde-comprar" text="Onde Comprar" />
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </>
}