
import request from 'supertest';

import app from '../toTest.js';

test ('home test shows list of movies', async () => {
    const response = await request(app)
        .get('/movies')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);

        expect(response.text.includes('Isle of dogs')).toBeTruthy();
        expect(response.text.includes('Encanto')).toBeTruthy();
        expect(response.text.includes('The Shawshank Redemption')).toBeTruthy();
        expect(response.text.includes('Min granne Totoro')).toBeTruthy();
    
});

//_________________individual tests________________
test('spec moviepage is the right page', async () => {
    const response = await request(app)
        .get('/movies/1')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);

        expect(response.text.includes('Isle of dogs')).toBeTruthy();
        //falsy
        expect(response.text.includes('Encanto')).toBeFalsy();
        expect(response.text.includes('The Shawshank Redemption')).toBeFalsy();
        expect(response.text.includes('Min granne Totoro')).toBeFalsy();
});

test('spec moviepage is the right page', async () => {
    const response = await request(app)
        .get('/movies/2')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);

        expect(response.text.includes('Encanto')).toBeTruthy();

        expect(response.text.includes('Isle of dogs')).toBeFalsy();
        expect(response.text.includes('The Shawshank Redemption')).toBeFalsy();
        expect(response.text.includes('Min granne Totoro')).toBeFalsy();
});

test('spec moviepage is the right page', async () => {
    const response = await request(app)
        .get('/movies/3')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);

        expect(response.text.includes('The Shawshank Redemption')).toBeTruthy();

        expect(response.text.includes('Isle of dogs')).toBeFalsy();
        expect(response.text.includes('Encanto')).toBeFalsy();
        expect(response.text.includes('Min granne Totoro')).toBeFalsy();
});

test('spec moviepage is the right page', async () => {
    const response = await request(app)
        .get('/movies/4')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);

        expect(response.text.includes('Min granne Totoro')).toBeTruthy();

        expect(response.text.includes('Isle of dogs')).toBeFalsy();
        expect(response.text.includes('Encanto')).toBeFalsy();
        expect(response.text.includes('The Shawshank Redemption')).toBeFalsy();
});
