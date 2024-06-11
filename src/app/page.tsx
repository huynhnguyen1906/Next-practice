'use client';
import Style from '@styles/Page.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Home() {
    const [expanding, setExpanding] = useState(false);
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/youtube');
    };
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
            <ul>
                <li>
                    <Link href="/facebook">Facebook</Link>
                </li>
                <li
                    onClick={() => {
                        handleNavigation();
                    }}
                >
                    Youtube
                </li>
            </ul>
        </div>
    );
}
