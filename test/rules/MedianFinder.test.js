import MedianFinder from '../../src/rules/MedianFinder';

test('MedianFinder function should increase one from last item from cases data', () => {
  const medianFinder = new MedianFinder();
  medianFinder.addNum(1); // arr = [1]
  medianFinder.addNum(2); // arr = [1, 2]
  const res1 = medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
  expect(res1).toEqual(1.5);
  medianFinder.addNum(3); // arr[1, 2, 3]
  const res2 = medianFinder.findMedian(); // return 2.0
  expect(res2).toEqual(2);
});
