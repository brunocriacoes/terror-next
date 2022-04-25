import React, { useState, useEffect } from 'react';
import { MyMenu, BannerHome, Product, Lets } from "../component/index"


export default function HomePage() {
    const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     document.title = `Página inicial`
    //     var headers = new Headers();
    //     let jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93cG5leHQuY29uIiwiaWF0IjoxNjUwMjE1NjI4LCJuYmYiOjE2NTAyMTU2MjgsImV4cCI6MTY1MDgyMDQyOCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.5cProtYYf_gEFFj7utjdJgYff7E-OzWv_Rh4RNppNcs'
    //     headers.append("Authorization", `Bearer ${jwt}`)
    //     fetch("http://wpnext.con/wp-json/wc/v3/products", {
    //         headers
    //     })
    //         .then(e => e.json())
    //         .then(p =>
    //             setPosts(p)
    //         )
    // }, []);

    return (
        <>
            <MyMenu />
            <BannerHome />
            <Product />
            <Lets />
            {/* {posts.map(post =>
                <div>
                    <a href={post.slug}>
                        <img src={post.images[0].src} alt='imagem' height={200} /> <br />
                    </a>
                    <strong>{post.name}</strong> <br />
                    <b>R${post.sale_price}</b>
                    <p>{post.short_description}</p>
                </div>
            )} */}

        </>
    )
}