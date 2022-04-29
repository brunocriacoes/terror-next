import style from "./style.module.css"
import IconProdTop from "../Icon/ProdTop"
export default function ListProd({ prods }) {
    return <>
        <IconProdTop color="#EDDFD0" />
        <div className={style.container}>
            {prods.map(p =>
                <div className={style.item}>
                    <img className={style.img} src={p.image} />
                    <strong className={style.name}>{p.name}</strong>
                    <span>4 estações</span>
                    <a href={'http://localhost:3000/produto/' + p.slug} className={style.btn}> comprar agora </a>
                </div>
            )}
        </div>
    </>
}