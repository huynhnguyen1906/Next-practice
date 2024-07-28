'use client';
import React from 'react';
import Style from '@styles/Tours.module.scss';

import { IoMdPin } from 'react-icons/io';
import ThumbnailSlider from '@/components/ThumbnailSlider';

export default function Tours() {
    return (
        <div className={Style.container}>
            <div className={Style.toursWrap}>
                <div className={Style.toursContent}>
                    <div className={Style.pref}>
                        <IoMdPin color="#D04848" />
                        <p className={Style.place}>福岡県</p>
                    </div>
                    <h1 className={Style.toursTtl}>海外に開かれた町、博多</h1>
                    <p className={Style.toursPrice}>￥15,000　日帰り</p>
                    <p className={Style.text}>
                        福岡は古来から海外と密接に関係した、国内唯一の地です。福岡にある海外との関連史跡を可能な限り時系列に沿って回ることで、福岡と海外の交流を深く理解していただけます。
                    </p>
                    <p className={Style.attn}>※ツアー内容の変更可能ですので、お問い合わせください</p>
                    <div className={Style.appt}>
                        <p>集合・解散場所</p>
                        <p>博多駅or福岡空港（福岡市）</p>
                        <p>(詳細はLINEでお知らせします)</p>
                    </div>
                </div>
                <ThumbnailSlider />
            </div>
        </div>
    );
}
