import { useEffect, useMemo } from 'react'

import { motion } from 'framer-motion'

import { tw } from 'twind'

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
            <div className={tw`absolute hidden md:block inset-1/2`}>
                <div className={tw`block relative`}>
                    {links.map((link, index) => (
                        <Content
                            key={index}
                            index={index}
                            position={positions[index]}
                            rotation={rotations[index]}
                        >
                            {link}
                        </Content>
                    ))}
                    <motion.div
                        className={tw`absolute`}
                        initial="start"
                        animate="animated"
                        transition={transition}
                        variants={variants}
                        style={{
                            zIndex: -1,
                            willChange: 'transform, opacity'
                        }}
                    >
                        <div
                            className={tw`absolute block border-solid border border-gray-100 rounded-full`}
                            style={{
                                top: `calc(50% - 190px)`,
                                left: `calc(50% - 190px)`,
                                width: 380,
                                height: 380
                            }}
                        />
                    </motion.div>
                </div>
            </div>
            <motion.main
                initial="start"
                animate="animated"
                transition={transition}
                variants={variants}
                className={tw`absolute flex flex-row justify-center items-center w-full h-screen`}
                style={{
                    zIndex: -1,
                    willChange: 'transform, opacity'
                }}
            >
                {children}
            </motion.main>
            <div className={tw`flex flex-col px-8 pb-12 md:hidden`} style={{
                paddingTop: '90vh'
            }}>
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="norefferer noreopener"
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
