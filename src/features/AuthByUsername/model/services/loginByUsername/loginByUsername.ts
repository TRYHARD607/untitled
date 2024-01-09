import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

interface LoginByUsernameParams {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameParams,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkApi) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      authData
    );

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.error(e);
    return thunkApi.rejectWithValue('error');
  }
});
