import { login, logout } from '../../actions/auth';

test('Should generate login action Object', () => {
  const uid = 'gbsjabjs83sjsa8';
  const action = login( uid );
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('Should generate logout action Object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
