import React, { useState, useEffect } from 'react'
import { MyMenu, Footer } from "../../component/index"

import style from "./style.module.css"

export default function ProdutoSingle({ produto }) {
    return <>
        <MyMenu />
        <div className={style.container}>
            <h1 className={style.title}>{produto.name}</h1>
            <div className={style.grid}>
                <div>
                    <img className={style.image} src={produto.images[0].src} />
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

    let base = "http://wpnext.con/wp-json/wc/v3"
    let jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93cG5leHQuY29uIiwiaWF0IjoxNjUxMDAzMDk0LCJuYmYiOjE2NTEwMDMwOTQsImV4cCI6MTY1MTYwNzg5NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.-RDZeXflgeUsXTK2e-BRYKXQXcUfYboqWFte-JDKrlY'
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${jwt}`)
    let info = { headers }

    let slug = context.query.slug

    let reqProduto = await fetch(`${base}/products/?slug=${slug}`, info)
    let produto = await reqProduto.json()

    return {
        props: {
            slug,
            produto: produto[0]
        },
    }
}