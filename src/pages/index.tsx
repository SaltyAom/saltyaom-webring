import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'

import { getString, MATCH_LIST, matchAllHref } from '@services'
import { Ouroboros } from '@layouts'

import { Display } from '@components'
interface Props {
    links: string[]
}

const Landing: FunctionComponent<Props> = ({ links }) => (
    <Ouroboros links={links}>
        <Display />
    </Ouroboros>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
    let html = await getString(
        'https://raw.githubusercontent.com/wonderfulsoftware/webring/main/index.html'
    )

    let [, list] = MATCH_LIST.exec(html) as RegExpExecArray
    let links = matchAllHref(list)

    return {
        props: {
            links
        },
        revalidate: 3600
    }
}

export default Landing
