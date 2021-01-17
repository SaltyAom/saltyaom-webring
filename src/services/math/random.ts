export const randomBetween = (min: number, max: number) =>
    +(Math.floor(Math.random() * max) + min).toFixed(0)
