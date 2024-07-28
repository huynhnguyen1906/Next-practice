'use client';
import React, { useState } from 'react';
import Style from '@styles/Tours.module.scss';
import { IoMdPin } from 'react-icons/io';
import ThumbnailSlider from '@/components/ThumbnailSlider';
import languages from '@/utils/languages';

export default function Tours() {
    const [language, setLanguage] = useState('jp');

    const t = languages[language as keyof typeof languages];

    return (
        <div className={Style.container}>
            <div>
                <select onChange={(e) => setLanguage(e.target.value)} value={language}>
                    <option value="en">English</option>
                    <option value="jp">日本語</option>
                    <option value="vi">Tiếng Việt</option>
                </select>
            </div>
            <div className={Style.toursWrap}>
                <div className={Style.toursContent}>
                    <div className={Style.pref}>
                        <IoMdPin color="#D04848" />
                        <p className={Style.place}>{t.place}</p>
                    </div>
                    <h1 className={Style.toursTtl}>{t.title}</h1>
                    <p className={Style.toursPrice}>{t.price}</p>
                    <p className={Style.text}>{t.text}</p>
                    <p className={Style.attn}>{t.attn}</p>
                    <div className={Style.appt}>
                        <p>{t.appt.title}</p>
                        <p>{t.appt.place}</p>
                        <p>{t.appt.detail}</p>
                    </div>
                </div>
                <ThumbnailSlider />
            </div>
        </div>
    );
}
