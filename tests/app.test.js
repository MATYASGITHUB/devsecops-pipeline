const request = require('supertest');
const app = require('../app');

describe('API Endpoints', () => {
    test('GET /api/health should return 200 and healthy status', async () => {
        const res = await request(app).get('/api/health');
        expect(res.status).toBe(200);
        expect(res.body.status).toBe('healthy');
    });

    test('GET /api/users/:id should return user or 404', async () => {
        const res = await request(app).get('/api/users/1');
        expect(res.status).toBe(200);
        expect(res.body.name).toBe('Alice');
        
        const resNotFound = await request(app).get('/api/users/99');
        expect(resNotFound.status).toBe(404);
    });
});
