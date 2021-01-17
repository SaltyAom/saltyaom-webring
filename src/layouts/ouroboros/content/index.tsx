import { useCallback, useMemo } from 'react'

import Head from 'next/head'

import { useAtom } from 'jotai'
import { selectedAtom } from '@models'

import { motion } from 'framer-motion'

import { tw } from 'twind'
import { css } from 'twind/css'

import { getDomainName } from '@services'
import { useRefState } from '@services/hooks'

import { ContentComponent } from './types'

const willChange = css({
    '&': {
        willChange: 'top, left, transform'
    }
})

const Content: ContentComponent = ({ position, rotation, children, index }) => {
    let [element, elementRef] = useRefState<HTMLParagraphElement>()

    let height = useMemo(() => element?.clientHeight || 0, [element])

    let [selected, setSelected] = useAtom(selectedAtom)

    let showCurrentLink = useCallback(() => {
        setSelected(index)
    }, [index])

    let web = useMemo(() => getDomainName(children), [children])

    let variants = useMemo(
        () => ({
            start: { paddingLeft: 72, opacity: 0 },
            animated: { paddingLeft: 0, opacity: 1 }
        }),
        []
    )

    return (
        <>
            <Head>
                <link rel="preconnect" href={web} />
            </Head>
            <div
                className={tw`absolute`}
                style={{
                    top: position[1],
                    left: position[0],
                    transform: `rotate(${rotation}deg)`
                }}
            >
                <button
                    onClick={showCurrentLink}
                    type="button"
                    className={tw`absolute appearance-none flex flex-row justify-start items-center z-10 m-0 py-12 pr-8 hover:pl-8 focus:pl-8 text(lg gray-300 hover:blue-400 focus:blue-300) whitespace-nowrap bg-transparent border-none outline-none transition-ouroboros cursor-pointer ${
                        selected === index
                            ? 'text(blue-400 focus:blue-400) pl-8'
                            : ''
                    } ${willChange}`}
                    style={{
                        top: `calc(-1 * (3em - ${height / 2}px))`,
                        height
                    }}
                >
                    <motion.p
                        initial="start"
                        animate="animated"
                        transition={{
                            delay: (index + 1) * 0.0275
                        }}
                        variants={variants}
                        style={{
                            willChange: 'padding-left, opacity'
                        }}
                    >
                        {web}
                    </motion.p>
                </button>
                <p
                    aria-hidden="true"
                    ref={elementRef}
                    className={tw`absolute m-0 opacity-0`}
                >
                    {web}
                </p>
            </div>
        </>
    )
}

export default Content
