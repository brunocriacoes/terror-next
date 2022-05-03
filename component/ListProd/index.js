import style from "./style.module.css"
import IconProdTop from "../Icon/ProdTop"
import IconProdBottom from "../Icon/ProdBottom"
export default function ListProd({ prods }) {
    return <>
        <IconProdTop color="#EDDFD0" />
        <a href="javascript:void(window.history.back())" className={style.linkPrev} >
            voltar
        </a>
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
        <div style={{backgroundColor: "#225439"}}>
            <IconProdBottom color="#EDDFD0" />
        </div>
    </>
}