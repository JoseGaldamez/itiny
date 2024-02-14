import { beforeAll, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react'
import { ShorterHome } from '../../../components/home/shorter-home';


describe('Testing ShorterHome', () => {
    beforeAll(() => {
        render(<ShorterHome />)
    })

    test('Header render', () => {
        expect(screen.getByRole('heading', { name: 'Make your links the shortest' })).toBeDefined()
    });

    test('Form rendered', () => {
        expect(screen.getByRole('form')).toBeDefined()
    });

    test('History rendered', () => {
        expect(screen.getByRole('heading', { name: "History" })).toBeDefined()
    })

    test('Footer rendered', () => {
        expect(screen.getByRole('link', { name: "josegaldamez.dev" })).toBeDefined()
    })
});