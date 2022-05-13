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
    let reqAllCats = await fetch(`${process.env.API_URL}/categories`)
    let allCats = await reqAllCats.json();

    return {
        props: {
            allCats
        },
        revalidate: 10
    }
}