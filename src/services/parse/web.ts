export const getDomainName = (web: string) => {
    if(!web) return

    let [, domain] = web.split('/').filter((part) => part)

    return domain.replace('www.', '')
}
