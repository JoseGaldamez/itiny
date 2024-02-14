import { expect, test, describe, vi, beforeAll, afterAll } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { History } from '../../components/history/History'

describe('Testing History', () => {

    afterAll(() => {
        cleanup()
    })

    test('Render History empty', () => {
        const toast = vi.fn();
        render(<History listOfUrls={[]} toast={toast} />)
        expect(screen.getByRole('heading', { name: 'History' })).toBeDefined()
        expect(screen.getByTestId('list-of-storage-urls')).toBeDefined()

    });

});

describe("Testing with value", () => {
    test('Render History with values', () => {
        const toast = vi.fn();
        render(<History listOfUrls={['vn56lt', 'lkdhik']} toast={toast} />)
        expect(screen.getByRole('heading', { name: 'History' })).toBeDefined()
        expect(screen.getByTestId('list-of-storage-urls')).toBeDefined()
        expect(screen.getAllByRole('link').length).toBe(2)
    })
})