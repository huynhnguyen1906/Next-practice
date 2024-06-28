'use client';
import '@styles/GlobalStyles.scss';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header';
import { Container } from 'react-bootstrap';
import Footer from '@/components/Footer';
import { Bounce, ToastContainer } from 'react-toastify';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Next Practice</title>
            </head>

            <body>
                <Header />
                <Container>{children}</Container>
                <Footer />
                <ToastContainer
                    position="bottom-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="dark"
                />
            </body>
        </html>
    );
}
