import axiosInstance from '@/lib/axiosInstance';

export const addBlog = async (title: string, author: string, content: string) => {
    try {
        const response = await axiosInstance.post('/blogs', { title, author, content });
        return response.data;
    } catch (error) {
        throw new Error('Failed to add blog');
    }
};
