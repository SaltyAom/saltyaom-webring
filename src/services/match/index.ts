export const MATCH_LIST = /<ol id="ring">(.*)<\/ol>/gs
export const MATCH_HREF = /href=(['"])(.*?)\1/gs

export const matchAllHref = (input: string) => {
    let found = []

    let matched
    while ((matched = MATCH_HREF.exec(input)) != null)
        found.push(matched[2])

    return found
}
