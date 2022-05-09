import react, { useState } from "react";
import { motion } from "framer-motion"
import Terror from "../Icon/Terror";
import SubMenu from "./SubMenu";
import BgMenu from "../Icon/BgMenu";

export default function MyMenu({ categories, bgColor }) {
    let bg = bgColor || "#225439"
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
        }
    };
    return <>
        <nav className="flex flex-row items-center relative bg-Dark-Green h-24">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="basis-1/4 z-10 mx-auto">
                    <motion.div
                        animate={{ x: [15, 0, 15] }}
                        initial={true}
                        transition={{ ease: "easeOut", duration: .5 }}
                    >
                        <Terror color="#EDDFD0" />
                    </motion.div>
                </div>

                <div className="absolute top-0 left-0 z-0">
                    <BgMenu color="#225439" />
                </div>

                <div className="basis-3/4 hidden w-full md:block md:w-auto z-10" id="mobile-menu">
                    <div className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <div>
                            <a href={base} className="font-TTHoves text-xl block py-2 pr-4 pl-3 text-Light-Orange md:p-0">Home</a>
                        </div>
                        {/* <div className='{style.flex_item}'>
                        <motion.div
                            className='{style.menu_item}'
                            onHoverStart={toggleHoverMenu}
                            onHoverEnd={toggleHoverMenu}
                        >
                            <div className='{style.link}'>Categorias</div>
                            <motion.div
                                className='{style.sub_menu}'
                                initial="exit"
                                animate={isHover ? "enter" : "exit"}
                                variants={subMenuAnimate}
                            >
                                <div className='{style.sub_menu_background}' />
                                <SubMenu categories={categories} />
                            </motion.div>
                        </motion.div>
                    </div> */}
                        <div>
                            <a href={base + "/contato"} className="font-TTHoves text-xl block py-2 pr-4 pl-3 text-Light-Orange md:p-0">Contato</a>
                        </div>
                        <div>
                            <a href={base + "/onde-comprar"} className="font-TTHoves text-xl block py-2 pr-4 pl-3 text-Light-Orange md:p-0">Onde Comprar</a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </>
}