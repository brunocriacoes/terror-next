import style from './style.module.css'
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
        <div className="product_hero_content">
            <span className={style.productHeroTitle}>categorias</span>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
            >
                {categories.map((cat, i) =>
                    <div key={cat.slug}>
                        <Link href={`categoria-produto/${cat.slug}`}>
                            <a>
                                <Image
                                    src={cat.image}
                                    alt="Categoria"
                                    width={500}
                                    height={500}
                                    onError={onError}
                                />
                                <span>{cat.name}</span>
                                <Image
                                    src="/ico/arrow.svg"
                                    alt="Arrows"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </Link>
                    </div>
                )}
            </Carousel>
        </div>
    </>
}
