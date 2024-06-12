'use client';
import { useRouter } from 'next/navigation';
export default function Tiktok() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/');
    };
    return (
        <div>
            Tiktok
            <button
                onClick={() => {
                    handleNavigation();
                }}
            >
                Back Home
            </button>
        </div>
    );
}
