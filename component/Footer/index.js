import style from './style.module.css'
import IconComprarAgora from "../Icon/ComprarAgora";
import IconFacebook from "../Icon/Facebook";
import IconInstagram from "../Icon/Instagram";
import IconWhatsApp from "../Icon/WhatsApp";
import Terror from "../Icon/Terror";

export default function Footer({ corText, corBg }) {
    const cor = corText || "#EDDFD0"
    const styleLink = {
        color: corText || "#EDDFD0",
        borderBottom: " 1px solid " + cor
    }
    const base = process.env.NEXT_PUBLIC_URI
    return <>
        <div
            className={style.container}
            style={{
                backgroundColor: corBg || "#225439",
                color: corText || "#EDDFD0"
            }}
        >
            <div>
                <Terror color={corText || "#EDDFD0"} />
            </div>
            <div>
                <a href={base+'/'} className={style.link} style={styleLink}>Home</a>
                <a href={base+'/categoria-produto/cultivo-indoor'} className={style.link} style={styleLink}>Produto</a>
            </div>
            <div>
                <a href={base+'/contato'} className={style.link} style={styleLink}>Contato</a>
                <IconWhatsApp color={corText || "#EDDFD0"} />
                <IconFacebook color={corText || "#EDDFD0"} />
                <IconInstagram color={corText || "#EDDFD0"} />
            </div>
            <div>
                <IconComprarAgora color={corText || "#EDDFD0"} />
            </div>
        </div>
    </>
}