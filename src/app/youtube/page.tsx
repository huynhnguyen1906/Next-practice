'use client';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axiosInstance';
import useSWR from 'swr';
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

    console.log(data);
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
            <div>
                {data ? (
                    <div>
                        {data.map((item: any, index: number) => {
                            return (
                                <div key={index}>
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}
