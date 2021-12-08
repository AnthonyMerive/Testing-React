import axios from 'axios';
import Users from '../src/users';

//nos permite no usar la dependencia
jest.mock('axios');

//simulamos o mockeamos la llamada de la API
test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);
  return Users.all().then(data => expect(data).toEqual(users));
});