import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  // return axios.post<LoginRes>('/v1/user/login', data);
  return axios.post<LoginRes>('/base/login', data);
}

export function logout() {
  return axios.post<LoginRes>('/base/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
