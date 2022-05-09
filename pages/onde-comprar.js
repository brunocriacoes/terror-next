import React, { useState, useEffect } from 'react';
import { MyMenu, Footer } from "../components/index"

import style from "../styles/ondeComprar.module.css";

export default function OndeComprar({allCats}) {
    useEffect(() => {
        document.title = `Página inicial`
    }, []);
    return (
        <>
            <MyMenu categories={allCats} bgColor="#520091"/>
            <div className={style.container}>
                <h1 className={style.title}>onde <br /> comprar</h1>
                <div className={style.grid}>
                    <div>
                        <h2 className={style.subtitle}>lojas físicas</h2>
                        <span className={style.localTitle}>são paulo</span>
                    </div>
                    <div className={style.flex}>
                        <span className={style.textTitle}>Estado:</span>
                        <select className={style.select}>
                            <option> São Paulo </option>
                            <option> Paraná </option>
                        </select>
                    </div>
                </div>
                <div className={style.grid}>
                    <div>
                        <p className={style.text}>
                            <strong className={style.textTitle}>Belli Roots</strong>
                            HeadShop GrowShop ReggaeShop <br />
                            Rua 24 de Maio, 57 (em frente a Galeria do Rock) <br />
                            República, São Paulo - SP, 01041-001 <br />
                            (11) 94120-6835 <br />
                        </p>
                        <p className={style.text}>
                            <strong className={style.textTitle}>Grama Cultivo Eficiente</strong>
                            Rua Cunha Gago, 824 <br />
                            Pinheiros, São Paulo - SP, 05421-001 <br />
                            (11) 3816-8257 <br />
                        </p>
                    </div>
                    <div>
                        <p className={style.text}>
                            <strong className={style.textTitle}>Diboa Tabacaria</strong>
                            Rua Fradique Coutinho, 155 <br />
                            Pinheiros, São Paulo - SP, 05416-010 <br />
                            (11) 3360-1930 <br />
                        </p>
                        <p className={style.text}>
                            <strong className={style.textTitle}>SmartsBrasil SP</strong>
                            Rua Teodoro Sampaio, 1020 - Loja 07 - Centro Comercial  <br />
                            Pinheiros, São Paulo - SP 05406050 <br />
                            (11) 96081-0032 <br />
                        </p>
                    </div>
                </div>
                <h2 className={style.subtitle}>lojas online</h2>
                <div className={style.gridBtn}>
                    <a href="" className={style.link}>Mercado Shops</a>
                    <a href="" className={style.link}>Smart Shop Brasil</a>
                    <a href="" className={style.link}>Diboa Tabacaria</a>
                    <a href="" className={style.link}>Grama Cultivo Eficiente</a>
                </div>
            </div>

            <Footer corText="#520091" corBg="#C0E0CC" />
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