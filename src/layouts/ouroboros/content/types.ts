import { FunctionComponent } from "react"

export interface ContentProps {
    position: number[]
    rotation: number
    index: number
    children: string
}

export type ContentComponent = FunctionComponent<ContentProps>