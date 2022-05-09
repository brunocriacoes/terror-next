import style from "./style.module.css"

export default function BannerCat({ img, name }) {
    return <>
        <div className={style.space}></div>
        <div className={style.container} style={{
            backgroundImage: `url('${img}')`
        }}>
            <h1 className={style.title}>{name}</h1>
        </div>
    </>

}