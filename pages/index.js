import React, { useState, useEffect } from 'react';
import { MyMenu, BannerHome, Product, Lets, Contato, Footer } from "../component/index"

export default function HomePage({ allCats }) {
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

    let base = process.env.PATH_URI;
    let jwt = process.env.JWT;

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