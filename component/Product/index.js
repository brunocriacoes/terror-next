import style from './style.module.css'
import { motion } from "framer-motion"

export default function Product() {
    return <>
        <img src="./images/product-top.svg" className={style.productHeroImg} />
        <div className="product_hero_content">
            <span className={style.productHeroTitle}>categorias</span>
            <div className={style.prodGrid}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.prev}>
                    <img src="./ico/prev.svg" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.next}>
                    <img src="./ico/next.svg" />
                </motion.div>
                {[1, 2, 3, 4].map((_, i )=>
                    <motion.a 
                    animate={{ x: [-25,0], opacity: [0,0, 1]  }}
                    transition={{ delay: i /5 }}
                    href='' 
                    className={style.prod}>
                        <img src='./categorias/acessorios.png' />
                        <span>
                            <span>JARDINAGEM URBANA</span>
                            <img src='./ico/arrow.svg' />
                        </span>
                    </motion.a>
                )}
            </div>
        </div>
    </>
}