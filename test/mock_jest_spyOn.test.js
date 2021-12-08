import * as app from '../src/App'
import * as math from '../src/math'

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // llama la implementacion
  expect(app.doAdd(1, 2)).toEqual(3);
  // y la espiamos
  expect(addMock).toHaveBeenCalledWith(1, 2);
});