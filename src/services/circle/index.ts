export const getCirclePosition = (items: number, r = 200) => {
    let positions: number[][] = []

    for (let i = 0; i < items; i += 1) {
        let x = +(0 + r * Math.cos((2 * Math.PI * i) / items)).toFixed(0)
        let y = +(0 + r * Math.sin((2 * Math.PI * i) / items)).toFixed(0)

        positions.push([x, y])
    }

    return positions
}

export const getRotation = (items: number) => {
    let rotations = []

    for (let i = 0; i < items; i += 1) rotations.push((i / items) * 360)

    return rotations
}
