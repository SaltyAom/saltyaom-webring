import { setup } from 'twind'
import { virtualSheet } from 'twind/sheets'

import oneClassName from '1-classname'

import { isProduction } from './runtime'

const tailwindConfig = require('~/tailwind.config.js')

const sheet = virtualSheet()

const { purge, ...config } = tailwindConfig

const twindConfig = {
    preflight: false,
    mode: 'strict'
}

if (isProduction) {
    setup({
        hash: (string) => oneClassName(string),
        sheet,
        ...twindConfig,
        ...config
    })

    sheet.reset()
} else {
    setup({
        ...twindConfig,
        ...config
    })
}

export { sheet }
