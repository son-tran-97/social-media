import { E_ERROR } from './enum';
import {RouteProps} from 'react-router';

// REACT
export interface ITarget {
  target: {
    value: React.SetStateAction<string>;
  };
  preventDefault(): void;
}

// ERRORS
export interface IMsg {
  msg: string | any;
}

export interface IUser {
  email: string;
  password: string;
}

export interface IAuthForm {
  isAuthenticated?: boolean;
  error: IError;
  clearErrors(): void;
}

export interface ILogoutProps {
  logout(): void;
}

export interface IError {
  id: E_ERROR;
  msg: IMsg;
}

export interface IAuthReduxProps {
  auth: { isAuthenticated: boolean };
  error: IError;
}

export interface IConfigHeaders {
  headers: {
    [index: string]: string;
  };
}

// NAVBAR
export interface IAppNavbar {
  auth?: {
    isAuthenticated: boolean;
    user: IUser;
  };
}

export interface IAuthFunction {
  _id: number;
  username?: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IReturnErrors {
  msg: {
    msg: string | any;
  };
  status: string;
  id: any;
}

export interface IAction {
  type: string;
  payload?: any;
}

export type ProtectedRouteProps = {
  component: any;
} & RouteProps;

export interface IChat {
  idTexter: number;
  idFriend: number;
  searchName: string
}

export interface IUserObj {
  _id: number;
  username: string;
  email: string;
}

export interface IMsg {
  sender: number;
  text: string;
  createdAt: any;
}

export interface IChatMsg {
  key: number;
  message: any 
  userId: number;
}