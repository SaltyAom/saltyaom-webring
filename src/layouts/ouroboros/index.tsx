import { useEffect, useMemo } from 'react'

import { motion } from 'framer-motion'

import { tw } from 'twind'
import { css } from 'twind/css'

import { useAtom } from 'jotai'
import { linksAtom, selectedAtom } from '@models'

import {
    getCirclePosition,
    getDomainName,
    getRotation,
    randomBetween
} from '@services'

import Content from './content'

import { OuroborosComponent } from './types'

import './ouroboros.sass'

const willChange = css({
    '&': {
        willChange: 'transform, opacity',
        '@media (max-width: 767.9px)': {
            opacity: '1 !important',
            transform: 'scale(1) !important'
        }
    }
})

const Ouroboros: OuroborosComponent = ({ children, links }) => {
    let positions = getCirclePosition(links.length)
    let rotations = getRotation(links.length)

    let [, updateLinks] = useAtom(linksAtom)
    let [, updateSelected] = useAtom(selectedAtom)

    useEffect(() => {
        updateLinks(links)
        updateSelected(randomBetween(0, links.length - 1))
    }, [links])

    let variants = useMemo(
        () => ({
            start: {
                scale: 2,
                opacity: 0
            },
            animated: {
                scale: 1,
                opacity: 1
            }
        }),
        []
    )

    let transition = useMemo(
        () => ({
            delay: (links.length + 1) * 0.0275,
            duration: 1.25
        }),
        [links.length]
    )

    return (
        <>
            <div className={tw`fixed hidden md:block inset-1/2`}>
                <div id="ouroboros">
                    {links.map((link, index) => (
                        <Content
                            key={link}
                            index={index}
                            position={positions[index]}
                            rotation={rotations[index]}
                        >
                            {link}
                        </Content>
                    ))}
                </div>
            </div>

            <motion.div
                className={tw`fixed inset-1/2 ${willChange}`}
                initial="start"
                animate="animated"
                transition={transition}
                variants={variants}
                style={{
                    zIndex: -100
                }}
            >
                <div
                    className={tw`absolute block border-solid border border-gray-100 rounded-full`}
                    style={{
                        top: `calc(50% - 190px)`,
                        left: `calc(50% - 190px)`,
                        width: 380,
                        height: 380,
                    }}
                />
            </motion.div>

            <motion.main
                initial="start"
                animate="animated"
                transition={transition}
                variants={variants}
                className={tw`absolute z-0 md:fixed flex flex-row justify-center items-center w-full h-screen ${willChange}`}
                style={{
                    zIndex: -1
                }}
            >
                {children}
            </motion.main>
            <div
                className={tw`flex flex-col px-8 pb-12 md:hidden`}
                style={{
                    paddingTop: '90vh'
                }}
            >
                {links.map((link) => (
                    <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noreferrer noreopener"
                        className={tw`py-4 text(xl gray-400 no-underline) border-solid border-0 border-b-1 border-gray-100`}
                    >
                        {getDomainName(link)}
                    </a>
                ))}
            </div>
        </>
    )
}

export default Ouroboros
