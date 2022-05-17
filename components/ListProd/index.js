import style from "./style.module.css"
import IconProdTop from "../Icon/ProdTop"
import IconProdBottom from "../Icon/ProdBottom"
import Image from "next/image";
import Link from "next/link";

export default function ListProd({ prods, colorTheme, colorFont }) {
    const onError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "/images/default.png";
    }

    return <>
        <IconProdTop color="#EDDFD0" />
        <a href="javascript:void(window.history.back())" className={style.linkPrev} >
            voltar
        </a>
        <div className={`grid grid-cols-1 lg:grid-cols-4 bg-[${colorTheme}] gap-4 px-10`}>
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
                    <strong className={`font-Beastly font-normal text-[${colorFont}] text-xl lg:text-6xl`}>{p.name}</strong>
                    <span className={`font-TTHoves uppercase font-medium text-[${colorFont}] text-sm lg:text-xl`}>{p.custom_fields.subtitulo }</span>
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