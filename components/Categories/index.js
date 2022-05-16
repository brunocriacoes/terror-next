import { motion } from "framer-motion"
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';

export default function Categories({ categories }) {
    const onError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "/images/default.png";
    }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return <>
        <div className='bg-Dark-Green'>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full lg:px-8">
                <span className="text-6xl lg:text-8xl text-Light-Orange font-Beastly font-normal">categorias</span>

                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item-padding-40-px"
                        className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
                    >
                        {categories.map((cat, i) =>
                            <div className="group relative" key={cat.slug}>
                                <Link href={`categoria-produto/${cat.slug}`}>
                                    <a className="w-full min-h-80 bg-gray-100 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80">
                                        <div className="w-full min-h-full rounded-md overflow-hidden group-hover:opacity-75 lg:h-80">
                                            <Image
                                                src={cat.image}
                                                className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                                                alt="Categoria"
                                                width={500}
                                                height={500}
                                                onError={onError}
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <span className='font-TTHoves text-Light-Orange uppercase'>{cat.name}</span>
                                            <Image
                                                src="/ico/arrow.svg"
                                                alt="Arrows"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )}
                    </Carousel>

            </div>
        </div>
    </>
}
