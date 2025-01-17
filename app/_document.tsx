import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default class MyDocument extends Document {

    render() {
        const { basePath } = useRouter()
        return (
            <Html lang="en" suppressHydrationWarning={true} suppressContentEditableWarning={true}>
                {/* <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                </Head> */}
                <body className="dark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}