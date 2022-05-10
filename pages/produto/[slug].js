import React, { useState, useEffect } from 'react'
import { MyMenu, Footer } from "../../components/index"
import Image from "next/image"

import style from "./style.module.css"

export default function ProdutoSingle({ produto, variationsProds }) {
    // const imageProd = variationsProds[0] ? variationsProds[0].images[0].src : "/images/default.png";
    // const [image, setImage] = useState(imageProd);

    return <>
        <MyMenu />
        <div className={style.container}>
            <h1 className={style.title}>{produto.name}</h1>
            <div className={style.grid}>
                <div>
                    {/* <Image
                        src={image}
                        alt="produto"
                        width={500}
                        height={500}
                        className={style.image}
                    /> */}
                    {/* {variationsProds.map(prod => <>
                        <span
                            className={style.btVariation}
                            onClick={() => setImage(prod.images[0].src)}
                            key={produto.id}
                        >
                            {prod.name.split(' - ')[1]}
                        </span>
                        {produto.meta_data[6].value == 'Sim' &&
                            < Image
                                src={prod.imagem_dos_status}
                                alt="produto"
                                width={100}
                                height={100}
                                className={style.image}
                            />
                        }
                    </>)} */}
                </div>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: produto.description }} />
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

    const paths = categories.map( category => {
        return { params: { slug: category.slug } }
    } )

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {

    let base = process.env.PATH_URI;
    let jwt = process.env.JWT;

    let headers = new Headers();
    headers.append("Authorization", `Bearer ${jwt}`)
    let info = { headers };

    // let slug = context.query.slug;
    const { slug } = context.params;

    let reqProduto = await fetch(`${base}/products/?slug=${slug}`, info)
    let produto = await reqProduto.json()

    // const variationIds = produto[0].variations || []
    // const metaData = {}
    // produto[0].meta_data.forEach(m => {
    //     metaData[m.key] = m.value
    // });

    // const variationsProds = await Promise.all(variationIds.map(async id => {
    //     let reqProduto = await fetch(`${base}/products/${id}`, info)
    //     return await reqProduto.json()
    // }))

    return {
        props: {
            produto: produto[0],
            // slug,
            // variationIds,
            // metaData,
            // variationsProds,
        },
        revalidate: 10
    }
}