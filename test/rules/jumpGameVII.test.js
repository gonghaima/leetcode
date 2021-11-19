import jump from '../../src/rules/jumpVII';
import { inputData, expected } from '../data/jumpVIIData';

test('jump should return the distance for case1', () => {
  const { s, minJump, maxJump } = inputData.case1;
  const result = jump(s, minJump, maxJump);
  expect(result).toEqual(expected.case1);
});

test('jump should return the distance for case2', () => {
  const { s, minJump, maxJump } = inputData.case2;
  const result = jump(s, minJump, maxJump);
  expect(result).toEqual(expected.case2);
});
