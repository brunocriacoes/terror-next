import style from './style.module.css'

import IconFacebook from "../Icon/Facebook";
import IconInstagram from "../Icon/Instagram";
import IconWhatsApp from "../Icon/WhatsApp";

export default function Contato() {
    return <>
        <div className={style.container}>
            <span className={style.title}>contato</span>
            <a  className={style.link} href="mailto:VENDAS@TERRO.AGR.BR">VENDAS@TERRO.AGR.BR</a>
            <div>
                <IconFacebook color="#225439"  style={{ width: "50px"}} />
                <IconInstagram color="#225439"  style={{ width: "50px"}} />
                <IconWhatsApp color="#225439"  style={{ width: "50px"}} />
            </div>
        </div>
    </>
}