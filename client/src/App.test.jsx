import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { describe, it, expect, vi } from 'vitest';

describe('App', () => {
    it('renders ShopSmart title', async () => {
        // Mock fetch
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ status: 'ok', message: 'Test Msg', timestamp: 'now' })
            })
        );

        render(
            <MemoryRouter>
                <AuthProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </AuthProvider>
            </MemoryRouter>
        );

        // Wait for async state updates in Home component
        const linkElements = await waitFor(() => screen.getAllByText('ShopSmart'));
        expect(linkElements.length).toBeGreaterThanOrEqual(1);
    });
});
