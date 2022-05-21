import React, { useState, useEffect } from 'react';
import { MyMenu, Footer } from "../components/index"

import style from "../styles/ondeComprar.module.css";

export default function OndeComprar({allCats}) {
    useEffect(() => {
        document.title = `Onde Comprar`
    }, []);
    return (
        <>
            <MyMenu categories={allCats}  colorFont="#520091" colorTheme="#C0E0CC"/>
            <div className="pt-40 bg-Purple px-5 lg:px-20">
                <h1 className="font-Beastly text-Light-Green text-7xl lg:text-[240px] font-normal">onde <br /> comprar</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-7">
                    <div>
                        <h2 className="text-5xl lg:text-7xl font-Beastly text-Light-Green">lojas físicas</h2>
                    </div>
                    <div className="grid items-center grid-cols-1 justify-center gap-4 lg:grid-cols-2">
                        <span className="font-TTHoves text-2xl text-Light-Green">Estado:</span>
                        <select className={style.select}>
                            <option> São Paulo </option>
                            <option> Paraná </option>
                        </select>
                    </div>
                </div>
                <span className="inline-block font-Beastly text-4xl text-Purple bg-Light-Green px-2 font-normal my-7 lg:my-14">são paulo</span>
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 lg:mb-24">
                    <p className="mb-4">
                        <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">Belli Roots</strong>
                        <span className="text-Light-Green font-TTHoves text-xl font-medium">HeadShop GrowShop ReggaeShop <br />
                        Rua 24 de Maio, 57 (em frente a Galeria do Rock) <br />
                        República, São Paulo - SP, 01041-001 <br />
                        (11) 94120-6835 <br /></span>
                    </p>
                    <p className="mb-4">
                        <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">Grama Cultivo Eficiente</strong>
                        <span className="text-Light-Green font-TTHoves text-xl font-medium">Rua Cunha Gago, 824 <br />
                        Pinheiros, São Paulo - SP, 05421-001 <br />
                        (11) 3816-8257 <br /></span>
                    </p>
                    <p className="mb-4">
                        <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">Diboa Tabacaria</strong>
                        <span className="text-Light-Green font-TTHoves text-xl font-medium">Rua Fradique Coutinho, 155 <br />
                        Pinheiros, São Paulo - SP, 05416-010 <br />
                        (11) 3360-1930 <br /></span>
                    </p>
                    <p className="mb-4">
                        <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">SmartsBrasil SP</strong>
                        <span className="text-Light-Green font-TTHoves text-xl font-medium">Rua Teodoro Sampaio, 1020 - Loja 07 - Centro Comercial  <br />
                        Pinheiros, São Paulo - SP 05406050 <br />
                        (11) 96081-0032 <br /></span>
                    </p>
                </div>
                <h2 className="font-Beastly text-Light-Green text-5xl lg:text-7xl mb-12">lojas online</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 pb-12 gap-16">
                    <a href="" className="font-TTHoves text-Light-Green hover:text-Purple hover:bg-Light-Green text-2xl font-black uppercase rounded border-2 border-solid text-center leading-[60px]">Mercado Shops</a>
                    <a href="" className="font-TTHoves text-Light-Green hover:text-Purple hover:bg-Light-Green text-2xl font-black uppercase rounded border-2 border-solid text-center leading-[60px]">Smart Shop Brasil</a>
                    <a href="" className="font-TTHoves text-Light-Green hover:text-Purple hover:bg-Light-Green text-2xl font-black uppercase rounded border-2 border-solid text-center leading-[60px]">Diboa Tabacaria</a>
                    <a href="" className="font-TTHoves text-Light-Green hover:text-Purple hover:bg-Light-Green text-2xl font-black uppercase rounded border-2 border-solid text-center leading-[60px]">Grama Cultivo Eficiente</a>
                </div>
            </div>

            <Footer corText="#520091" corBg="#C0E0CC" />
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