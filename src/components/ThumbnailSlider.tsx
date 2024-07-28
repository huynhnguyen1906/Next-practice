'use client';
import { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import '@styles/ThumbnailSlider.scss';

export default function ThumbnailSlider() {
    const mainSliderRef = useRef(null);
    const thumbnailSliderRef = useRef(null);

    useEffect(() => {
        if (mainSliderRef.current && thumbnailSliderRef.current) {
            const mainSlider = new Splide(mainSliderRef.current, {
                type: 'fade',
                rewind: true,
                pagination: false,
                arrows: false,
            });

            const thumbnailSlider = new Splide(thumbnailSliderRef.current, {
                fixedWidth: 100,
                fixedHeight: 60,
                gap: 10,
                rewind: true,
                pagination: false,
                cover: true,
                isNavigation: true,
                breakpoints: {
                    600: {
                        fixedWidth: 60,
                        fixedHeight: 44,
                    },
                },
            });

            mainSlider.sync(thumbnailSlider);
            mainSlider.mount();
            thumbnailSlider.mount();
        }
    }, []);

    return (
        <div className="splideContainer">
            <div id="main-slider" className="splide mainSliderContainer" ref={mainSliderRef}>
                <div className="splide__track">
                    <ul className="splide__list mainSlider">
                        <li className="splide__slide">
                            <Image src="/images/picture_01.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/mainVisual.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/picture_01.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/mainVisual.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/picture_01.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/mainVisual.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                    </ul>
                </div>
            </div>

            <div id="thumbnail-slider" className="splide thumbnail-slider" ref={thumbnailSliderRef}>
                <div className="splide__track">
                    <ul className="splide__list thumbnail">
                        <li className="splide__slide">
                            <Image src="/images/picture_01.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/mainVisual.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/picture_01.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/mainVisual.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/picture_01.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/mainVisual.webp" alt="alt" width={1000} height={1000} priority />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
