'use client';
import { useState, useEffect } from 'react';
import { toRomaji } from 'wanakana';
import { keywords } from '@/utils/keyword';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedRomaji, setTypedRomaji] = useState('');
    const [score, setScore] = useState(0);

    const currentWord = keywords[currentIndex].word;
    const currentKana = keywords[currentIndex].extra[0].kana;
    const romajiToType = toRomaji(currentKana);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const { key } = event;

            if (romajiToType.startsWith(typedRomaji + key)) {
                setTypedRomaji((prev) => prev + key);
                if (typedRomaji + key === romajiToType) {
                    setScore((prev) => prev + 1);
                    setTypedRomaji('');
                    setCurrentIndex((prev) => (prev + 1) % keywords.length);
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [typedRomaji, currentIndex, romajiToType]);

    const renderRomajiToType = () => {
        return romajiToType.split('').map((char, index) => (
            <span key={index} style={{ color: index < typedRomaji.length ? 'green' : 'black' }}>
                {char}
            </span>
        ));
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="fs-1">Typing Game</h1>
            <p className="fs-1">Current Word: {currentWord}</p>
            <p className="fs-1">Romaji to type: {renderRomajiToType()}</p>
            <p className="fs-1">Score: {score}</p>
        </div>
    );
}
