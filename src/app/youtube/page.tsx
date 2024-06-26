'use client';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axiosInstance';
import useSWR from 'swr';
import IndexTable from '@/components/IndexTable';

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default function Youtube() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/');
    };

    const { data, error } = useSWR('/blogs', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    console.log('data =>>>>', data);
    if (!data) return <div>Loading...</div>;
    return (
        <div className="mt-3">
            Youtube
            <button
                onClick={() => {
                    handleNavigation();
                }}
                className="btn btn-primary ms-3"
            >
                Back Home
            </button>
            <div>
                <IndexTable blogs={data} />
            </div>
        </div>
    );
}
