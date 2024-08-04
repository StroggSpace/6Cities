import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { AuthStatusResponse } from '../types/Auth';
import { setAuthorizationStatus, userSlice, getAuthStatus, login, logout } from './userSlice';
import { USER } from '../utils/consts';

const initialState = {
  authorizationStatus: false,
  user: null as Omit<AuthStatusResponse, 'token'> | null,
  token: '',
};


describe('userSlice', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterAll(() => {
    mock?.restore();
  });

  it('should return initial state', () => {
    expect(userSlice.reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('setAuthorizationStatus', () => {
    expect(userSlice.reducer(initialState, setAuthorizationStatus(true))).toEqual({ ...initialState, authorizationStatus: true });
  });

  it('should handle extraReducers', async () => {
    mock?.onPost('/login').reply(200, USER);
    mock?.onGet('/login').reply(200, USER);
    mock?.onDelete('/logout').reply(204, '');
    const loginResponse = await axios.post<AuthStatusResponse>('/login', { email: 'email', password: 'password' });
    const authStatus = await axios.get<AuthStatusResponse>('/login');
    const logoutResponse = await axios.delete('/logout');
    expect(loginResponse.data).toEqual(USER);
    expect(authStatus.data).toEqual(USER);
    expect(logoutResponse.data).toEqual('');
  });

  it('should handle getAuthStatus', () => {
    expect(userSlice.reducer(initialState, getAuthStatus.fulfilled(USER, 'request'))).toEqual({
      ...initialState, user: {
        id: USER.id,
        email: USER.email,
        name: USER.name,
        avatarUrl: USER.avatarUrl,
        isPro: USER.isPro,
      },
      token: 'token',
      authorizationStatus: true
    });
  });

  it('should handle login', () => {
    expect(userSlice.reducer(initialState, login.fulfilled(USER, 'request', { email: 'email', password: 'password' }))).toEqual(
      {
        user: {
          id: USER.id,
          email: USER.email,
          name: USER.name,
          avatarUrl: USER.avatarUrl,
          isPro: USER.isPro,
        },
        token: 'token',
        authorizationStatus: true
      });
  });

  it('should handle logout', () => {
    expect(userSlice.reducer(initialState, logout.fulfilled(void 0, 'request'))).toEqual({ ...initialState, user: null });
  });
});
