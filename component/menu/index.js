import { motion } from "framer-motion"
import style from './style.module.css';
import Terror from "../Icon/Terror";
import BgMenu from "../Icon/BgMenu";

export default function MyMenu() {
    const base = process.env.NEXT_PUBLIC_URI
    return <>
        <div className={style.container}>
            <div>
                <motion.div
                    animate={{ x: [15, 0, 15] }}
                    initial={true}
                    transition={{ ease: "easeOut", duration: .5 }}

                >
                    <Terror color="#EDDFD0" />
                </motion.div>
            </div>
            <BgMenu color="#225439"/>
            
            <div className={style.link}>Home</div>
            <div className={style.link}>Produtos</div>
            <div className={style.link}>Contato</div>
            <div className={style.link}>Onde Comprar</div>
        </div>
    </>
}