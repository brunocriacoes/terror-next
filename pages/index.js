import React, { useState, useEffect } from 'react';
import { MyMenu, BannerHome, Product, Lets, Contato, Footer } from "../component/index"


export default function HomePage({allCats}) {
    useEffect(() => {
        document.title = `Página inicial`
    }, []);
    return (
        <>
            <MyMenu />
            <BannerHome />
            <Product categories={allCats} />
            <Lets />
            <Contato />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {

    let base = "http://wpnext.con/wp-json/wc/v3"
    let jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93cG5leHQuY29uIiwiaWF0IjoxNjUxMDAzMDk0LCJuYmYiOjE2NTEwMDMwOTQsImV4cCI6MTY1MTYwNzg5NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.-RDZeXflgeUsXTK2e-BRYKXQXcUfYboqWFte-JDKrlY'
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${jwt}`)
    let info = { headers }

    let reqAllCats = await fetch(`${base}/products/categories`, info)
    let allCats = await reqAllCats.json()
    allCats = allCats.map(c => ({
        name: c.name,
        slug: c.slug,
        id: c.id,
        image: c.image?.src || null
    })).filter(c => c.image)

    return {
        props: {
            allCats
        },
    }
}