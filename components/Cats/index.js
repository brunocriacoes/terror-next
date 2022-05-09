import style from './style.module.css'
import { motion } from "framer-motion"

export default function Cats({categories}) {
    const base = process.env.NEXT_PUBLIC_URI
    const onError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = base + "/images/default.png";
    }
    return <>
            
        <div className="product_hero_content">
            <span className={style.productHeroTitle}>categorias OK </span>
            <div className={style.prodGrid}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.prev}>
                    <img src={base+"/ico/prev.svg"} />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.next}>
                    <img src={base+"/ico/next.svg"} />
                </motion.div>
                {categories.map((cat, i )=>
                    <motion.a 
                    key={cat.slug}
                    animate={{ x: [-25,0], opacity: [0,0, 1]  }}
                    transition={{ delay: i /5 }}
                    href={'categoria-produto/'+cat.slug}
                    className={style.prod}>
                        <img src={cat.image} onError={onError} />
                        <span>
                            <span>{cat.name}</span>
                            <img src={base+"/ico/arrow.svg"} />
                        </span>
                    </motion.a>
                )}
            </div>
        </div>
    </>
}