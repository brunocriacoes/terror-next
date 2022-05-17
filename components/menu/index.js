import react, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import Terror from "../Icon/Terror";
import SubMenu from "./SubMenu";
import BgMenu from "../Icon/BgMenu";
import Link from 'next/link'

export default function MyMenu({ categories, colorTheme, colorFont }) {
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [padding, setPadding] = useState(30);
    const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 600;

        if (backgroundTransparacyVar < 1) {
            let paddingVar = 30 - backgroundTransparacyVar * 20;
            let boxShadowVar = backgroundTransparacyVar * 0.1;
            setBackgroundTransparacy(backgroundTransparacyVar);
            setPadding(paddingVar);
            setBoxShadow(boxShadowVar);
        }
    }, [clientWindowHeight]);

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
                    color: colorTheme
                }}
            >
                {text}
            </a>

        </Link>
    }
    return <>
        <nav
            className="fixed top-0 left-0 right-0 grid grid-cols-1 w-full h-24 z-10"
            style={{
                background: `rgba(34, 84, 57, ${backgroundTransparacy})`,
                padding: `${padding}px 0px`,
                boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
            }}
        >
            <div className="grid grid-cols-4 justify-items-center items-center">
                <div className="mx-auto">
                    <motion.div
                        animate={{ x: [15, 0, 15] }}
                        initial={true}
                        transition={{ ease: "easeOut", duration: .5 }}
                    >
                        <Terror color={colorTheme} />
                    </motion.div>
                </div>

                {/* <div className="absolute top-0 left-0 z-0 hidden lg:block">
                    <BgMenu color={bg} />
                </div> */}

                <div className="col-span-3 hidden w-full md:block md:w-auto z-10" id="mobile-menu">
                    <div className="grid grid-cols-4 gap-4 items-center w-full">
                        <div className="">
                            <LinkMenu href="/" text="Home" />
                        </div>
                        <div className="">
                            <motion.div
                                className=''
                                onHoverStart={toggleHoverMenu}
                                onHoverEnd={toggleHoverMenu}
                            >
                                <LinkMenu href="/categoria-produto" text="Categorias" />
                                <motion.div
                                    initial="exit"
                                    animate={isHover ? "enter" : "exit"}
                                    variants={subMenuAnimate}
                                >
                                    <SubMenu categories={categories} bgColor={colorTheme} color={colorFont} />
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="">
                            <LinkMenu href="/contato" text="Contato" />
                        </div>
                        <div className="">
                            <LinkMenu href="/onde-comprar" text="Onde Comprar" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
}