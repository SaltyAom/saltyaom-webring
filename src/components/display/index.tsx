import { useMemo } from 'react'

import { linksAtom, selectedAtom } from '@models'
import { useAtom } from 'jotai'

import { tw } from 'twind'
import { getDomainName } from '@services'

import { Webring } from '@components'

const Display = () => {
    let [links] = useAtom(linksAtom)
    let [selected] = useAtom(selectedAtom)

    let link = links[selected] || ''

    let web = useMemo(() => getDomainName(link) || '', [link])

    return (
        <>
            <h2
                className={tw`absolute text(sm gray-300) font-normal select-none`}
                style={{
                    top: `calc(50vh - 160px)`
                }}
            >Webring</h2>
            <a
                className={tw`font-light text(2xl gray-600 hover:blue-400 focus:blue-400) no-underline transition-colors outline-none`}
                role="heading"
                aria-level={1}
                href={link}
                target="_blank"
                rel="norefferer noreopener"
            >
                {web}
            </a>
            <a
                href="https://webring.wonderful.software"
                target="_blank"
                rel="norefferer noreopener"
                className={tw`absolute flex justify-center items-center text(gray-300 hover:blue-400 focus:blue-400) transition-colors cursor-pointer outline-none`}
                aria-label="webring.wonderful.software.com"
                style={{
                    width: 416,
                    height: 416,
                    top: `calc(50vh - 208px + 144px)`,
                    left: `calc(50% - 208px)`,
                    transform: 'scale(.08)'
                }}
            >
                <Webring />
            </a>
        </>
    )
}

export default Display
