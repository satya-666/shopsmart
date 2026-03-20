const request = require('supertest');
const app = require('../src/app');

describe('API Integration Tests', () => {
    it('Frontend should be able to reach the /api/health endpoint', async () => {
        // Simulating the exact call the frontend makes
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status', 'ok');
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toMatch(/running/i);
    });

    it('Root route provides fallback response', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toMatch(/Backend Service/);
    });
});
