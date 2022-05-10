import style from './style.module.css';
import Image from 'next/image';

export default function Lets() {
    return <>
        <div className={style.container}>

            <Image
                src="/images/product-bottom.svg"
                alt="Arrow"
                width={50}
                height={50}
                className={style.graph_1}
            />
            <h2 className={style.title_1}>lets </h2>
            <span className={style.subtitle}>
                PRONTO PARA USO <br />
                É SÓ REGAR COM ÁGUA!
            </span>
            <h2 className={style.title_2}>grooow</h2>
            <Image
                src="/logos/green.svg"
                alt="Arrow"
                width={50}
                height={50}
                className={style.logo}
            />
            <Image
                src="/images/bg-top-contact.svg"
                alt="Arrow"
                width={50}
                height={50}
                className={style.graph_2}
            />
        </div>
    </>
}