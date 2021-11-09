import { rest } from 'msw';
import mockCombination from './mockCombination.json';
import mockCombinations from './mockCombinations.json';

export const handlers = [
  rest.get('/api/combinations/*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockCombination));
  }),
  rest.get('/api/combinations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockCombinations));
  }),
];
