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
                backgroundColor: colorTheme || '#EDDFD0'
            }}
        >
            <Link href="#">
                <a
                    onClick={() => router.back()}
                    className="text-right block px-[70px] font-Beastly font-normal text-5xl"
                    style={{
                        color: colorFont || '#225439',
                    }}
                >
                    voltar
                </a>
            </Link>

            <div className={`grid grid-cols-1 lg:grid-cols-3 bg-[${colorTheme}] gap-4 px-[70px]`}>
                {prods.map(p =>
                    <div key={p.slug} className={style.item}>
                        <Image
                            src={p.image}
                            onError={onError}
                            alt={p.name}
                            height={300}
                            width={300}
                        />
                        <strong
                            className={`font-Beastly font-normal text-[${colorFont}] text-xl lg:text-6xl`}
                            style={{
                                color: colorFont
                            }}
                        >
                            {p.name}
                        </strong>
                        <span
                            className={'mt-5 font-TTHoves uppercase font-medium text-[' + colorFont + '] text-sm lg:text-xl'}
                            style={{
                                color: colorFont
                            }}
                        >
                            {p.custom_fields.subtitulo}
                        </span>
                        <Link href={'/produto/' + p.slug}>
                            <a
                                className={'mt-5 border-2 rounded font-TTHovesBold text-xl py-2 mb-10 uppercase text-[' + colorFont + '] hover:text-white hover:bg-[' + colorFont + ']'}
                                style={{
                                    borderColor: colorFont
                                }}
                            >
                                Comprar Agora
                            </a>
                        </Link>
                    </div>
                )}
            </div>
        </div>
        <div style={{ backgroundColor: colorFont || '#225439' }} className="pb-20">
            <IconProdBottom color={colorTheme || '#EDDFD0'} />
        </div>
    </>
}