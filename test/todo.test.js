const request = require('supertest');
const app = require('../app');

describe('Todos API', () => {
  it('GET /todos should return empty array initially', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /todos should create a todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ text: 'Learn Docker' });
    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe('Learn Docker');
    expect(res.body.completed).toBe(false);
  });

  it('PATCH /todos/:id should mark todo as completed', async () => {
    const postRes = await request(app)
      .post('/todos')
      .send({ text: 'Write tests' });
    const todoId = postRes.body.id;

    const patchRes = await request(app)
      .patch(`/todos/${todoId}`);
    expect(patchRes.statusCode).toBe(200);
    expect(patchRes.body.completed).toBe(true);
  });
});
