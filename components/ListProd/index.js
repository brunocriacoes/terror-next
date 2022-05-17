import style from "./style.module.css"

import IconProdBottom from "../Icon/ProdBottom"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function ListProd({ prods, colorTheme, colorFont }) {
    const onError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "/images/default.png";
    }

    const router = useRouter()

    return <>
        <div
            style={{
                backgroundColor: colorTheme
            }}
        >
            <Link href="#">
                <a 
                onClick={() => router.back()}
                className="text-right block px-[70px] font-Beastly font-normal text-5xl"
                style={{
                    color: colorFont,
                }}
                >
                    voltar
                </a>
            </Link>

        <div className={`grid grid-cols-1 lg:grid-cols-4 bg-[${colorTheme}] gap-4 px-[70px]`}>
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
                    <span className={`font-TTHoves uppercase font-medium text-[${colorFont}] text-sm lg:text-xl`}>{p.custom_fields.subtitulo}</span>
                    <Link href={'/produto/' + p.slug}>
                        <a 
                        className={style.btn}
                        style={{
                            color: colorFont,
                            borderColor: colorFont
                        }}
                        >
                            Comprar Agora
                            </a>
                    </Link>
                    {/* <a href={base + '/produto/' + p.slug} className={style.btn}> comprar agora </a> */}
                </div>
            )}
        </div>
        </div>
        <div style={{ backgroundColor: "#225439" }} className="pb-20">
            <IconProdBottom color={colorTheme} />
        </div>
    </>
}