import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const uid = 'hjksha83HDASKDH9';
  const action = {
    type: 'LOGIN',
    uid
  };

  const state = authReducer(undefined, action);
  expect(state).toEqual({uid});
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };

  const state = authReducer({uid: 'hdashdhd83e382hk'}, action);
  expect(state).toEqual({});
});
