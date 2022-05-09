import style from './style.module.css';

export default function Lets() {
    return <>
    <div className={style.container}>

        <img src="./images/product-bottom.svg" className={style.graph_1} />
        <h2 className={style.title_1}>let's </h2>
        <span className={style.subtitle}>
            PRONTO PARA USO <br />
            É SÓ REGAR COM ÁGUA!
        </span>
        <h2 className={style.title_2}>grooow</h2>
        <img src="./logos/green.svg" className={style.logo} />
        <img src="./images/bg-top-contact.svg" className={style.graph_2} />
    </div>
    </>
}