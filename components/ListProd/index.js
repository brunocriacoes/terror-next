import style from "./style.module.css"
import IconProdTop from "../Icon/ProdTop"
import IconProdBottom from "../Icon/ProdBottom"
import Image from "next/image";
import Link from "next/link";

export default function ListProd({ prods }) {
    const base = process.env.NEXT_PUBLIC_URI

    const onError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "/images/default.png";
    }

    return <>
        <IconProdTop color="#EDDFD0" />
        <a href="javascript:void(window.history.back())" className={style.linkPrev} >
            voltar
        </a>
        <div className={style.container}>
            {prods.map(p =>
                <div key={p.slug} className={style.item}>
                    <Image 
                        src={p.image}   
                        onError={onError}
                        className={style.img}
                        alt={p.name}
                        height={300}
                        width={300}
                    />
                    <strong className={style.name}>{p.name}</strong>
                    <span>4 estações</span>
                    <Link href={'/produto/' + p.slug}>
                        <a className={style.btn}>Comprar Agora</a>
                    </Link>
                    {/* <a href={base + '/produto/' + p.slug} className={style.btn}> comprar agora </a> */}
                </div>
            )}
        </div>
        <div style={{ backgroundColor: "#225439" }}>
            <IconProdBottom color="#EDDFD0" />
        </div>
    </>
}