import style from './style.module.css'
import IconComprarAgora from "../Icon/ComprarAgora";
import IconFacebook from "../Icon/Facebook";
import IconInstagram from "../Icon/Instagram";
import IconWhatsApp from "../Icon/WhatsApp";
import Terror from "../Icon/Terror";

export default function Footer() {
    return <>
        <div className={style.container}>
            <div>
            <Terror color="#EDDFD0" />
            </div>
            <div>
                <a href='' className={style.link}>Home</a>
                <a href='' className={style.link}>Produto</a>
            </div>
            <div>
                <a href='' className={style.link}>Produto</a>
                <IconWhatsApp color="#EDDFD0" />
                <IconFacebook color="#EDDFD0" />
                <IconInstagram color="#EDDFD0" />
            </div>
            <div>
            <IconComprarAgora color="#EDDFD0" />
            </div>
        </div>
    </>
}