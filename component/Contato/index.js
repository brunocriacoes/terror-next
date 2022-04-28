import style from './style.module.css'

export default function Contato() {
    return <>
        <div className={style.container}>
            <span className={style.title}>contato</span>
            <a  className={style.link} href="mailto:VENDAS@TERRO.AGR.BR">VENDAS@TERRO.AGR.BR</a>
            <div>
                <img src="./ico/whatsapp.svg" />
                <img src="./ico/facebook.svg" />
                <img src="./ico/instagram.svg" />
            </div>
        </div>
    </>
}