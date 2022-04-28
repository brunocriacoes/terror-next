import { motion } from "framer-motion"
import style from './style.module.css';

export default function MyMenu() {
    return <>
        <div className={style.container}>
            <div>
                <motion.div
                    animate={{ x: [15, 0, 15] }}
                    initial={true}
                    transition={{ ease: "easeOut", duration: .5 }}
                    
                >
                    <img className={style.logo} src="http://localhost:3000/logos/terro.svg" alt="Logo" />
                </motion.div>
            </div>
            <img src="http://localhost:3000/images/bg-menu.svg" className={style.bgMenu}/>
            <div className={style.link}>Home</div>
            <div className={style.link}>Produtos</div>
            <div className={style.link}>Contato</div>
            <div className={style.link}>Onde Comprar</div>
        </div>
    </>
}