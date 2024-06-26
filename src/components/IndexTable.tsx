'use client';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Blogs } from '../types/blog';
import AddBlogModal from './AddBlogModal';
import { useState } from 'react';

interface Props {
    blogs: Blogs[];
}

export default function IndexTable(props: Props) {
    const { blogs } = props;
    console.log('blogs =>>>>', blogs);

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <div className="d-flex justify-content-between mt-3">
                <h2>Blogs List</h2>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    Add Blog
                </Button>
                <AddBlogModal showModal={showModal} setShowModal={setShowModal} />
            </div>
            <Table striped bordered hover className="mt-2">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>
                                <Button variant="primary">Edit</Button>
                                <Button variant="warning" className="mx-3">
                                    Edit
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
