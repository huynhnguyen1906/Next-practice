'use client';

import { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function Home() {
    const [bgColor, setBgColor] = useState<string>('#ffffff');

    const handleColorChange = (color: any) => {
        setBgColor(color.hex);
    };

    return (
        <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '20px' }}>
            <h1>BG-color変更</h1>
            <SketchPicker color={bgColor} onChangeComplete={handleColorChange} width="250px" />
        </div>
    );
}
