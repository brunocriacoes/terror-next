import React, { useState, useEffect } from 'react'
import { MyMenu, Footer } from "../../component/index"

import style from "./style.module.css"

export default function ProdutoSingle({ produto, variationsProds }) {
    const [image, setImage] = useState(variationsProds[0].images[0].src)
    console.log(variationsProds)
    return <>
        <MyMenu />
        <div className={style.container}>
            <h1 className={style.title}>{produto.name}</h1>
            <div className={style.grid}>
                <div>
                    <img className={style.image} src={image} />
                    {variationsProds.map(prod => <>
                        <span
                            className={style.btVariation}
                        >
                            {prod.name.split(' - ')[1]}
                        </span>
                    </>)}
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

export async function getServerSideProps(context) {

    let base = process.env.PATH_URI;
    let jwt = process.env.JWT;

    let headers = new Headers();
    headers.append("Authorization", `Bearer ${jwt}`)
    let info = { headers }

    let slug = context.query.slug

    let reqProduto = await fetch(`${base}/products/?slug=${slug}`, info)
    let produto = await reqProduto.json()

    const variationIds = produto[0].variations || []
    const metaData = {}
    produto[0].meta_data.forEach(m => {
        metaData[m.key] = m.value
    });

    const variationsProds = await Promise.all(variationIds.map(async id => {
        let reqProduto = await fetch(`${base}/products/${id}`, info)
        return await reqProduto.json()
    }))

    return {
        props: {
            slug,
            produto: produto[0],
            variationIds,
            metaData,
            variationsProds,
        },
    }
}