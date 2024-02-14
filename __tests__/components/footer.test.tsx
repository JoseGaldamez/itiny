import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../../components/footer/Footer'

describe('Testing Footer', () => {
    test('Page', () => {
        render(<Footer />)
        expect(screen.getByRole('link', { name: 'josegaldamez.dev' })).toBeDefined()
        expect(screen.getByRole('link', { name: 'josegaldamez.dev' })).toHaveProperty('href', 'https://josegaldamez.dev/');
    })
});
