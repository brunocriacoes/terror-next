
import style from './style.module.css'

export default function BannerHome() {
    return <>
        <div className={style.space}></div>
        <div className={style.heroBanner} >
            <h1 className={style.heroBannerTitle1}>solo</h1>
            <span className={style.subtitle1}>
                Substratos Premium. <br />
                Plantas saudáveis.
            </span>
            <span className={style.subtitle2}>
                Frutos saborosos. <br />
                Colheita o ano todo.
            </span>
            <h1 className={style.heroBannerTitle2}>vivo</h1>
        </div>
    </>
}