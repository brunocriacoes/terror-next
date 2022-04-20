import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Dynamic() {

    const router = useRouter();
    const { slug } = router.query;

    const [post, setPost] = useState({
        name: null,
        sale_price: null,
        short_description: null,
        images: [{ src: null }]
    });


    useEffect(() => {
        if (!router.isReady) return;
        console.log(slug);
        var headers = new Headers();
        let jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93cG5leHQuY29uIiwiaWF0IjoxNjUwMjE1NjI4LCJuYmYiOjE2NTAyMTU2MjgsImV4cCI6MTY1MDgyMDQyOCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.5cProtYYf_gEFFj7utjdJgYff7E-OzWv_Rh4RNppNcs';
        headers.append("Authorization", `Bearer ${jwt}`);
        fetch(`http://wpnext.con/wp-json/wc/v3/products/?slug=${slug}`, {
            headers
        })
            .then(e => e.json())
            .then(p => {
                setPost(p[0])
            });

    }, [router.isReady]);

    return (
        <>
            <h1>{slug}</h1>
            <img src={post.images[0].src} alt='imagem' height={200} /> <br />
            <h1> {post.name} </h1>
            <b>R${post.sale_price}</b>
            <p>{post.short_description}</p>
        </>
    )
}