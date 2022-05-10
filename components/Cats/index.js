import style from './style.module.css'
import { motion } from "framer-motion"
import Image from "next/image"

export default function Cats({ categories }) {
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
                    <Image
                        src="/ico/prev.svg"
                        alt="Prev"
                        width={50}
                        height={50}
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.next}>
                    <Image
                        src="/ico/next.svg"
                        alt="Next"
                        width={50}
                        height={50}
                    />
                </motion.div>
                {categories.map((cat, i) =>
                    <motion.a
                        key={cat.slug}
                        animate={{ x: [-25, 0], opacity: [0, 0, 1] }}
                        transition={{ delay: i / 5 }}
                        href={'categoria-produto/' + cat.slug}
                        className={style.prod}>
                        <Image
                            src={cat.image}
                            onError={onError}
                            alt="Categoria"
                            width={100}
                            height={100}
                        />
                        <span>
                            <span>{cat.name}</span>
                            <Image
                                src="/ico/arrow.svg"
                                alt="Arrow"
                                width={50}
                                height={50}
                            />
                        </span>
                    </motion.a>
                )}
            </div>
        </div>
    </>
}