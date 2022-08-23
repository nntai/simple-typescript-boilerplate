import move from './move';

describe('move', () => {
  it('case 1', () => {
    expect(move({ name: 'a', id: 1 })).toEqual(1);
  })
});
