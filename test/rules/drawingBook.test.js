import pageCount, { countHelper } from '../../src/rules/drawingBook';
import { inputData, expected, utilData } from '../data/drawingBookData';
test('sockMerchant function should return correct pairs of sock from case1 data', () => {
  expect(pageCount(inputData.case1.n, inputData.case1.p)).toBe(expected.case1);
  expect(pageCount(inputData.case2.n, inputData.case2.p)).toBe(expected.case2);
  expect(pageCount(inputData.case3.n, inputData.case3.p)).toBe(expected.case3);
  expect(pageCount(inputData.case4.n, inputData.case4.p)).toBe(expected.case4);
  expect(pageCount(inputData.case5.n, inputData.case5.p)).toBe(expected.case5);
  expect(pageCount(inputData.case6.n, inputData.case6.p)).toBe(expected.case6);

  utilData.map(item => {
    expect(countHelper(item[0])).toBe(item[1]);
  });
});
