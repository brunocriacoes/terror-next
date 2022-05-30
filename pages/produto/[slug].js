import React, { useState, useEffect } from 'react'
import { MyMenu, Footer } from "../../components/index"
import Image from "next/image"

import style from "./style.module.css"

export default function ProdutoSingle({ listProdutos, categories }) {

    const imageDefault = listProdutos.variations[0].image
    const [image, setImage] = useState(imageDefault);


    const text = listProdutos.custom_fields.cor_texto
    const bg = listProdutos.custom_fields.cor_de_fundo

    return <>
        <MyMenu categories={categories} colorTheme={text} colorFont={bg} />
        <div
            className="px-[70px] pt-[20px] pb-[40px]"
            style={{
                backgroundColor: bg
            }}
        >
            <h1
                className="text-6xl lg:text-[200px] font-Beastly block pt-16"
                style={{
                    color: text
                }}
            >
                {listProdutos.name}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <Image
                        src={image}
                        alt="produto"
                        width={500}
                        height={500}
                        className={style.image}
                    />
                    <div className="flex gap-5">

                    {listProdutos.variations.map(produto =>
                        <div key={produto.id}>
                            <Image
                                src={produto.image}
                                alt="produto"
                                width={1}
                                height={1}
                                style={{
                                    display: "none !important"
                                }}

                            />
                            <span
                                className={style.btVariation}
                                onClick={() => setImage(produto.image)}
                                key={produto.id}
                            >
                                {produto.name}
                            </span>
                        </div>
                    )}
                    </div>
                </div>
                <div>
                    <span className={`text-4xl lg:text-6xl font-TTHoves font-normal uppercase text-[${listProdutos.custom_fields.cor_texto}]`}>{listProdutos.custom_fields.subtitulo}</span>
                    <div className='font-TTHoves' dangerouslySetInnerHTML={{ __html: listProdutos.description.replace(/\\/gi, "").replace(/(?:\\[rn]|[\r\n]+)+/g, "<br/>") }} />
                    {listProdutos.custom_fields.adubo == 'Sim' &&
                        < Image
                            src={listProdutos.custom_fields.imagem_dos_status}
                            alt="produto"
                            width={100}
                            height={100}
                            className={style.image}
                        />
                    }
                    <a className={style.btn}> ONDE COMPRAR </a>
                </div>
            </div>
        </div>
        <Footer corText={bg} corBg={text} />
    </>
}

export async function getStaticPaths() {
    let reqProducts = await fetch(`${process.env.API_URL}/all-products`);
    let products = await reqProducts.json();
    const paths = products.map(category => {
        return { params: { slug: category.slug } }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let reqProdutos = await fetch(`${process.env.API_URL}/products?slug=${params.slug}`);
    let listProdutos = await reqProdutos.json();

    let reqAllCats = await fetch(`${process.env.API_URL}/categories`)
    let allCats = await reqAllCats.json();

    return {
        props: {
            listProdutos,
            slug: params.slug,
            categories: allCats
        },
        revalidate: 10
    }
}