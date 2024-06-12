'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
export default function Facebook() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/');
    };
    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        handleNavigation();
                    }}
                >
                    Back Home
                </button>
                <Button variant="primary">Facebook</Button>
            </div>
        </div>
    );
}
