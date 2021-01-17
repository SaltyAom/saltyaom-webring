export const getString = async (link: string) => {
    let response = await fetch(link)
    let data = response.text()

    return data
}
