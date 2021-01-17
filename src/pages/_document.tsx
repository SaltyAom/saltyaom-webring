import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getStyleTag } from 'twind/sheets'
import { isProduction, sheet } from '@services'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="th">
                <Head>
                    <meta
                        http-equiv="content-type"
                        content="text/html, charset=utf8"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1, minimum-scale=1 , maximum-scale=1, user-scalable=no, viewport-fit=cover"
                    />
                    <meta
                        http-equiv="X-UA-Compatible"
                        content="IE=edge,chrome=1"
                    />
                    <meta name="title" content="Webring" />
                    <meta name="description" content="วงแหวนเว็บ แห่งนี้สร้างขึ้นเพื่อส่งเสริมให้ศิลปิน นักออกแบบ และนักพัฒนาชาวไทย สร้างเว็บไซต์ของตัวเองและแบ่งปันการเข้าชมซึ่งกันและกัน" />
                    <meta name="author" content="SaltyAom" />
                    <link rel="icon" href="/webring.svg" />
                    <link rel="shortcut icon" href="/webring.svg" />
                    <link rel="canonical" href="https://webring.saltyaom.com" />

                    <meta property="og:title" content="Webring" />
                    <meta
                        property="og:description"
                        content="วงแหวนเว็บ แห่งนี้สร้างขึ้นเพื่อส่งเสริมให้ศิลปิน นักออกแบบ และนักพัฒนาชาวไทย สร้างเว็บไซต์ของตัวเองและแบ่งปันการเข้าชมซึ่งกันและกัน"
                    />
                    <meta property="article:author" content="SaltyAom" />
                    <meta property="og:site_name" content="Webring" />
                    <meta
                        property="og:image"
                        content="https://webring.saltyaom.com/webring.jpg"
                    />
                    <meta property="og:image:width" content="1920" />
                    <meta property="og:image:height" content="1080" />
                    <meta property="og:locale" content="th_TH" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content="Webring"
                    />
                    <meta
                        name="twitter:description"
                        content="วงแหวนเว็บ แห่งนี้สร้างขึ้นเพื่อส่งเสริมให้ศิลปิน นักออกแบบ และนักพัฒนาชาวไทย สร้างเว็บไซต์ของตัวเองและแบ่งปันการเข้าชมซึ่งกันและกัน"
                    />
                    <meta name="twitter:site" content="@saltyAom" />
                    <meta
                        name="twitter:image"
                        content="https://webring.saltyaom.com/webring.jpg"
                    />
                    <meta
                        name="twitter:creator"
                        content="@saltyAom"
                    />
                </Head>
                {isProduction ? (
                    <head
                        dangerouslySetInnerHTML={{
                            __html: getStyleTag(sheet).replace(
                                '__twind',
                                '__twind_init'
                            )
                        }}
                    />
                ) : null}
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
