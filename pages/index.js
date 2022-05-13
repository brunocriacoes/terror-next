import React, { useState, useEffect } from 'react';
import { MyMenu, BannerHome, Categories, Lets, Contato, Footer } from "../components/index"

export default function HomePage({ allCats }) {
    useEffect(() => {
        document.title = `Página inicial`
    }, []);
    return (
        <>
            <MyMenu categories={allCats} />
            <BannerHome />
            <Categories categories={allCats} />
            <Lets />
            <Contato />
            <Footer />
        </>
    )
}

export async function getStaticProps(context) {
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${process.env.JWT}`)
    let info = { headers }
    
    let reqAllCats = await fetch(`${process.env.PATH_URI}/products/categories`, info)
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
        revalidate: 10
    }
}