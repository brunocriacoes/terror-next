import React, { useState, useEffect } from 'react'
import { MyMenu, Footer } from "../../components/index"
import Image from "next/image"
import Link from 'next/link'


export default function ProdutoSingle({ listProdutos, categories }) {

    const imageDefault = listProdutos.variations[0]?.image || null
    const [image, setImage] = useState(imageDefault);

    const text = listProdutos.custom_fields.cor_texto
    const bg = listProdutos.custom_fields.cor_de_fundo

    let hr = `<hr style="border-color: ${text}; margin-top: 20px; display:block;" />`

    let content = listProdutos.description
    content = content.replace(/\\/gi, "")
    content = content.replace(/(?:\\[rn]|[\r\n]+)+/g, "<br/>")
    content = content.replace(/\<hr\s\/\>/g, hr)


    return <>
        <MyMenu categories={categories} colorTheme={text} colorFont={bg} />
        <div
            className="pt-[50px] px-[20px] lg:px-[70px] lg:pt-[20px] pb-[40px]"
            style={{
                backgroundColor: bg
            }}
        >
            <h1
                className="text-6xl lg:text-[200px] font-Beastly block pt-16 mb-7"
                style={{
                    color: text
                }}
            >
                {listProdutos.name}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>{image &&
                    <Image
                        src={image}
                        alt="produto"
                        width={500}
                        height={500}
                    />}
                    <div className="flex gap-5">

                        {listProdutos.variations.map(produto =>
                            <div key={produto.id}>
                                <Image
                                    src={produto.image}
                                    alt="produto"
                                    width={1}
                                    height={1}
                                    style={{
                                        display: "none !important"
                                    }}

                                />
                                {listProdutos.variations.length == 1 && <div
                                    className="flex gap-4"
                                >
                                    {Array(4).fill('').map((_, i) => <div  key={`galery_item_${i}`}
                                        className="rounded border-2 cursor-pointer opacity-70 hover:opacity-100 mb-6"
                                        style={{
                                            borderColor: text
                                        }}
                                    >
                                         <Image
                                    src={produto.image}
                                    alt="produto"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        display: "none !important"
                                    }}

                                />
                                    </div>)}
                                </div>}
                                {listProdutos.variations.length > 1 &&
                                    <button
                                        className="font-TTHoves mb-6 uppercase opacity-[var(--o,.5)] hover:opacity-60 text-[12px] lg:text-[25px] lg:w-[175px] block text-center rounded px-4 py-1 mt-5 font-bold hover:brightness-125"
                                        style={{
                                            backgroundColor: text,
                                            color: bg,
                                            "--o": produto.image == image ? 1 : .3,
                                            filter: produto.image != image ? "grayscale(100)" : ""
                                        }}
                                        onClick={() => setImage(produto.image)}
                                        key={produto.id}
                                    >
                                        {produto.name || 'Sem Nome'}
                                    </button>
                                }
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <span
                        className="text-4xl lg:text-6xl font-TTHoves font-normal uppercase  block mb-5"
                        style={{
                            color: text
                        }}
                    >
                        {listProdutos.custom_fields.subtitulo}
                    </span>
                    <div
                        className='font-TTHoves'
                        dangerouslySetInnerHTML={{ __html: content }}
                        style={{
                            color: text
                        }}
                    />
                    {listProdutos.custom_fields.adubo == 'Sim' &&
                        <div
                            className="relative w-full h-[85px] lg:w-1/2 lg:h-[100px] mt-2"
                            style={{
                                // backgroundColor: text,
                                // mixBlendMode: "multiply"
                            }}
                        >
                            <Image
                                style={{
                                    // filter: "contrast(200%) grayscale(100%) ",
                                    // mixBlendMode: "screen"
                                }}
                                src={listProdutos.custom_fields.imagem_dos_status}
                                alt="produto"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    }
                    <Link href="/onde-comprar" passHref>
                        <a
                            className="fixed left-0 bottom-0 w-full lg:w-auto lg:relative font-TTHoves uppercase text-2xl block text-center lg:rounded py-4 mt-5 font-bold hover:brightness-125"
                            style={{
                                backgroundColor: text,
                                color: bg,
                            }}
                        >
                            ONDE COMPRAR
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <Footer corText={bg} corBg={text} />
    </>
}

export async function getStaticPaths() {
    let reqProducts = await fetch(`${process.env.API_URL}/all-products`);
    let products = await reqProducts.json();
    const paths = products.map(category => {
        return { params: { slug: category.slug } }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let reqProdutos = await fetch(`${process.env.API_URL}/products?slug=${params.slug}`);
    let listProdutos = await reqProdutos.json();

    let reqAllCats = await fetch(`${process.env.API_URL}/categories`)
    let allCats = await reqAllCats.json();

    return {
        props: {
            listProdutos,
            slug: params.slug,
            categories: allCats
        },
        revalidate: 10
    }
}