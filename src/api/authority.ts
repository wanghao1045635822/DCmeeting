import axios from 'axios';
import { Pagination } from '@/types/global';

export interface User {
  userId: string;
  loginName:string;
  userName: string;
  nickName: string;
  email: string;
  phoneNumber: string;
  dept: any;
  deptName:string;
  createTime: string;
  status: string;
  psw:string;
  role:string;
  roleName:string;
}

export interface Organization {
  deptId: string;
  deptName: string;
  email: string;
  leader: string;
  phone: string;
  orderNum: string;
  parentId: string;
  status: string;
  address: string;
  parentName: string;
}

export interface Resource {
  menuId: string;
  createTime: string;
  updateTime: string;
  menuName: string;
  component: string;
  description: string;
  icon: string;
  orderNum: string;
  target: string;
  parentId: string;
  parentName: string;
  children: any;
  syesourcetype: string;
  status: string;
  path: string;
  perms: string;
  menuType: string;
}

export interface Knowledge {
  id: string;
  createTime: string;
  updateTime: string;
  name: string;
}

export interface Result<T> {
  code: number;
  msg: string;
  rows: T;
  total: number;
}

export interface Role {
  roleId:  string;
  createTime:  string;
  updateTime:  string;
  roleName:  string;
  remark:  string;
  iconCls:  string;
  roleSort:  string;
  status:  string;
  roleKey:  string;
  dataScope:  string;
  dept: any;
  resources: any;
  knowledges: any;
  dialogs: any;
  agents: any;
}

export function RoleList(params: Pagination) {
  return axios.get<Result<Role[]>>('/base/system/role/list', { params });
}

export function RoleDelete(id) {
  return axios.delete('/base/system/role/' + id);
}

export function RoleEdit(role) {
  return axios.put('/base/system/role', { role });
}

export function RoleAdd(role) {
  return axios.post('/base/system/role', { role });
}

export function Rolestatus(roleId, status) {
  return axios.put('/base/system/role/changeStatus', {
    roleId: roleId,
    status: status,
  });
}

export function UserList(params: Pagination) {
  return axios.get<Result<User[]>>('/base/system/user/list', { params });
}

export function Userstatus(userID, status) {
  return axios.put('/base/system/user/changeStatus', {
    userId: userID,
    status: status,
  });
}

export function UserChangePwd(userId) {
  return axios.put('/base/system/user/profile/updatePwd', { userId: userId });
}

export function UserEdit(user) {
  return axios.put('/base/system/user', { user });
}

export function UserAdd(user) {
  return axios.post('/base/system/user', { user });
}

export function UserDelete(id) {
  return axios.delete('/base/system/user/' + id);
}

export function OrganizationList(key: string) {
  return axios.post<Result<Organization[]>>('/base/system/dept/list', {
    deptName: key,
  });
}

export function OrganizationAdd(organization) {
  return axios.post('/base/system/dept', { organization });
}

export function OrganizationDelete(id) {
  return axios.delete('/base/system/dept/' + id);
}

export function OrganizationUpdate(organization) {
  return axios.put('/base/system/dept', { organization });
}

export function OrganizationById(id) {
  return axios.get<Result<Organization>>('/base/system/dept/' + id);
}

export function ResourceList(key: string) {
  return axios.get<Result<Resource[]>>('/base/system/menu/treeselect');
}

export function ResourceAdd(resource) {
  return axios.post('/base/system/menu', { resource });
}

export function ResourceDelete(id) {
  return axios.delete('/base/system/menu/' + id);
}

export function ResourceUpdate(resource) {
  return axios.put('/base/system/menu', { resource });
}

export function ResourceById(id) {
  return axios.get<Result<Resource>>('/base/system/menu/' + id);
}

export function KnowledgeList() {
  return axios.get<Result<Knowledge>>('/api/v1/kb/list');
}

export function DialogList() {
  return axios.get<Result<Knowledge>>('/api/v1/dialog/list');
}
