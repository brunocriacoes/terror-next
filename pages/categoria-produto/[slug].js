import React, { useState, useEffect } from 'react'
import { MyMenu, BannerCat, Categories, Footer, ListProd} from "../../components/index"

export default function Categoria({ newcat, allCats }) {
    useEffect(() => {
        document.title = `Categoria`
    }, []);
    return <>
        <MyMenu colorTheme={newcat.custom_fields.cor_tema} colorFont={newcat.custom_fields.cor_fonte} />
        <BannerCat img={newcat.image} name={newcat.name} colorTheme={newcat.custom_fields.cor_tema} colorFont={newcat.custom_fields.cor_fonte}  />
        <ListProd prods={newcat.products} colorTheme={newcat.custom_fields.cor_tema} colorFont={newcat.custom_fields.cor_fonte} />
        <Categories categories={allCats} />
        <Footer corBg={newcat.custom_fields.cor_tema} corText={newcat.custom_fields.cor_fonte} />
    </>
}

export async function getStaticPaths() {
    let reqCategories = await fetch(`${process.env.API_URL}/categories`);
    let categories = await reqCategories.json();

    const paths = categories.map( category => {
        return { params: { slug: category.slug } }
    } )

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { slug } = context.params;

    let newreqCast = await fetch(`${process.env.API_URL}/category?slug=${slug}`);
    let newcat     = await newreqCast.json();

    let reqAllCats = await fetch(`${process.env.API_URL}/categories`);
    let allCats = await reqAllCats.json()

    return {
        props: {
            newcat,
            allCats
        },
        revalidate: 10
    }
}