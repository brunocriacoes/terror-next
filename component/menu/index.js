import react, { useState } from "react";
import { motion } from "framer-motion"
import style from './style.module.css';
import Terror from "../Icon/Terror";
import BgMenu from "../Icon/BgMenu";
import SubMenu from "./SubMenu";

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
        <div
            className={style.container}
            style={{
                backgroundColor: bg
            }}
        >
            <div>
                <motion.div
                    animate={{ x: [15, 0, 15] }}
                    initial={true}
                    transition={{ ease: "easeOut", duration: .5 }}

                >
                    <Terror color="#EDDFD0" />
                </motion.div>
            </div>
            <BgMenu color={bg} />

            <a href={base} className={style.link}>Home</a>
            <div className={style.flex_item}>
                <motion.div
                    className={style.menu_item}
                    onHoverStart={toggleHoverMenu}
                    onHoverEnd={toggleHoverMenu}
                >
                    <div className={style.link}>Categorias</div>
                    <motion.div
                        className={style.sub_menu}
                        initial="exit"
                        animate={isHover ? "enter" : "exit"}
                        variants={subMenuAnimate}
                    >
                        <div className={style.sub_menu_background} />
                        <SubMenu categories={categories} />
                    </motion.div>
                </motion.div>
            </div>
            <a href={base+"/contato"} className={style.link}>Contato</a>
            <a href={base+"/onde-comprar"} className={style.link}>Onde Comprar</a>
        </div>
    </>
}