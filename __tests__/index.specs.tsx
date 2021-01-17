import Landing from '@pages/index'

import { Provider } from 'jotai'

import { render } from '@testing-library/react'

describe('App', () => {
    it('renders without crashing', () => {
        const { baseElement } = render(
            <Provider>
                <Landing links={[]} />
            </Provider>
        )

        expect(baseElement).toBeTruthy()
    })
})
