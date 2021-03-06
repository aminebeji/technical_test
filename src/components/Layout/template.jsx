import { SEO } from '@/__mocks__/info';
import Head from 'next/head';
import Header from '@c/Sections/Header/template';
import { useDispatch } from 'react-redux';
import { INIT_RATES_ACTIONS } from '@/store/modules/actions';
import { useEffect } from 'react';

function Layout({ children }) {
    const { title, description, keywords, image } = SEO
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(INIT_RATES_ACTIONS())
    }, [])
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                {/* Open Graph / Facebook */}
                <meta property="og:keywords" content={keywords} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                {/* Twitter */}
                <meta property="twitter:card" content={image} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={image} />
                <meta prefix="og: http://ogp.me/ns#" property="og:image:url" content={image} />
                <meta prefix="og: http://ogp.me/ns#" property="og:title" content={title} />
                <meta prefix="og: http://ogp.me/ns#" property="og:description" content={description} />
            </Head>
            <main className="container xl mx-auto" >
                <Header />

                {children}
            </main>
        </>
    )
}

export default Layout