import style from './style.module.css'

export default function Footer() {
    return <>
        <div className={style.container}>
            <div>
            <img src="http://localhost:3000/logos/terro.svg" />
            </div>
            <div>
                <a href='' className={style.link}>Home</a>
                <a href='' className={style.link}>Produto</a>
            </div>
            <div>
                <a href='' className={style.link}>Produto</a>
                <img src="http://localhost:3000/ico/whatsapp.svg" />
                <img src="http://localhost:3000/ico/facebook.svg" />
                <img src="http://localhost:3000/ico/instagram.svg" />
            </div>
            <div>
            <img src="http://localhost:3000/logos/green.svg" />
            </div>
        </div>
    </>
}