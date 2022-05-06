import React, { useState, useEffect } from 'react';
import { MyMenu, Contato, Footer } from "../component/index"

export default function ContatoPage({ allCats }) {
    return (
        <>
            <MyMenu categories={allCats} />
            <Contato corText="#520091" corBg="#C0E0CC" pTop="150px" />
            <Footer corText="#C0E0CC" corBg="#520091" />
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