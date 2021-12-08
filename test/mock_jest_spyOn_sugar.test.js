import * as app from '../src/App'
import * as math from '../src/math'

//como hicimos anteriormente vamos a aplicar mock con SpyOn 
test("calls math.add", () => {

  // almacenamos en la varible originalAdd la implementacion de math "Add"
  const originalAdd = math.add;

  // mockeamos con la implementacion original tal como lo anteriormente visto
  math.add = jest.fn(originalAdd);

  // espiamos las llamadas de la implementacion
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);

  // hacemos un override a la implementacion
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  
  // restauramos a la implementacion original
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);

});