'use client';
import Style from '@styles/Page.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export default function Home() {
    const [expanding, setExpanding] = useState(false);
    const handleClick = () => {
        setExpanding(!expanding);
    };
    return (
        <div>
            <div className={Style.container}>
                <h1
                    className={clsx(Style.title, {
                        [Style.active]: expanding,
                    })}
                    onClick={handleClick}
                >
                    hello
                </h1>
            </div>
        </div>
    );
}
