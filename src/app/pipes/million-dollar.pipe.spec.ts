import { MillionDollarPipe } from './million-dollar.pipe';

describe('MillionDollarPipe', () => {
  it('create an instance', () => {
    const pipe = new MillionDollarPipe();
    expect(pipe).toBeTruthy();
  });
});
