import * as app from '../src/App'
import * as math from '../src/math'

// seteamos todos nuestros modulos a mocks asi nos evitamos crear mocks dentro del JS
jest.mock("../src/math.js");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});