import style from "./style.module.css"

export default function ListProd({ prods }) {
    return <>
        <div className={style.container}>
            {prods.map(p =>
                <div>
                    <img className={style.img} src={p.image} />
                    <strong className={style.title}>{p.name}</strong>
                    <a href={p.slug} className={style.btn}></a>
                </div>
            )}
        </div>
    </>
}