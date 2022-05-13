import React, { useState, useEffect } from 'react'
import { MyMenu, BannerCat, Categories, Footer, ListProd} from "../../components/index"

export default function Categoria({ newcat, allCats }) {
    useEffect(() => {
        document.title = `Categoria`
    }, []);
    return <>
        <MyMenu />
        <BannerCat img={newcat.image} name={newcat.name} />
        <ListProd prods={newcat.products} />
        <Categories categories={allCats} />
        <Footer />
    </>
}

export async function getStaticPaths() {
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${process.env.JWT}`);
    let info = { headers };

    let reqCategories = await fetch(`${process.env.PATH_URI}/products/categories`, info);
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
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${process.env.JWT}`)
    let info = { headers }

    const { slug } = context.params;

    let newreqCast = await fetch(`http://api-terro.regularswitch.com/wp-json/api/v1/category?slug=${slug}`, info);
    let newcat     = await newreqCast.json();

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
            newcat,
            allCats
        },
        revalidate: 10
    }
}