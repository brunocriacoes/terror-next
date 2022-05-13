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

    return {
        props: {
            listProdutos,
            slug: params.slug
        },
        revalidate: 10
    }
}