import React, { useState, useEffect } from 'react'
import { MyMenu, Footer } from "../../components/index"
import Image from "next/image"

import style from "./style.module.css"

export default function ProdutoSingle({ listProdutos }) {
    // const imageProd = variationsProds[0] ? variationsProds[0].images[0].src : "/images/default.png";
    // const [image, setImage] = useState(produtos.variations.image);

    return <>
        <MyMenu />
        <div className={style.container}>
            <h1 className={style.title}>{listProdutos.name}</h1>
            <div className={style.grid}>
                <div>
                    {/* <Image
                        src={image}
                        alt="produto"
                        width={500}
                        height={500}
                        className={style.image}
                    /> */}
                    {listProdutos.variations.map(produto => <>
                        <span
                            className={style.btVariation}
                            onClick={() => setImage(produto.image)}
                            key={produto.id}
                        >
                            {produto.name}
                        </span>
                        {produto.meta_data[6].value == 'Sim' &&
                            < Image
                                src={produto.imagem_dos_status}
                                alt="produto"
                                width={100}
                                height={100}
                                className={style.image}
                            />
                        }
                    </>)}
                </div>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: listProdutos.description }} />
                    <a className={style.btn}> ONDE COMPRAR </a>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export async function getStaticPaths() {
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${process.env.JWT}`);
    let info = { headers };

    let reqCategories = await fetch(`${process.env.PATH_URI}/products`, info);
    let categories = await reqCategories.json();

    const paths = categories.map(category => {
        return { params: { slug: category.slug } }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    let base = process.env.PATH_URI;

    let reqProdutos  = await fetch(`http://api-terro.regularswitch.com/wp-json/api/v1/products?slug=${params.slug}`);
    let listProdutos = await reqProdutos.json();

    return {
        props: {
            listProdutos,
            // slug,
            // variationIds,
            // metaData,
            // variationsProds,
        },
        revalidate: 10
    }
}