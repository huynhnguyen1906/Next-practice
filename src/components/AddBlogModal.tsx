'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface Props {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
}

function AddBlogModal(props: Props) {
    const { showModal, setShowModal } = props;
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleClose = () => {
        setTitle('');
        setAuthor('');
        setContent('');
        setShowModal(false);
    };

    const handleSubmit = () => {
        console.log('title =>>>>', title);
        console.log('author =>>>>', author);
        console.log('content =>>>>', content);
        handleClose();
    };
    return (
        <>
            <Modal
                show={showModal}
                onHide={() => {
                    setShowModal(false);
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {' '}
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="..."
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddBlogModal;
