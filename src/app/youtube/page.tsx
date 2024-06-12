'use client';
import { useRouter } from 'next/navigation';
export default function Youtube() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/');
    };
    return (
        <div>
            Youtube
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
