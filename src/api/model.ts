import axios from 'axios';
import qs from 'query-string';
import type { DescData } from '@arco-design/web-vue/es/descriptions/interface';

export interface PolicyRecord {
  id: string;
  number: number;
  name: string;
  contentType: 'img' | 'horizontalVideo' | 'verticalVideo';
  filterType: 'artificial' | 'rules';
  count: number;
  status: 'online' | 'offline';
  createdTime: string;
}

export interface PolicyParams extends Partial<PolicyRecord> {
  current: number;
  pageSize: number;
}

export interface PolicyListRes {
  list: PolicyRecord[];
  total: number;
}

// 接口上传
export function kbdocumentupload(params) {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // token: token,
    },
  };
  return axios.post('/api/v1/document/upload', params, config);
}

// 获取大模型列表接口
export function modelList() {
  return axios.get('/api/v1/llm/list');
}

// 大模型tab列表
export function modelmyLlms() {
  return axios.get('/api/v1/llm/my_llms');
}

// 添加子模型
export function addLlm(params) {
  return axios.post('/api/v1/llm/add_llm', params);
}

export function editLlm(params) {
  return axios.post('/api/v1/llm/edit_llm', params);
}

// 删除子模型
export function deleteLlm(params) {
  return axios.post('/api/v1/llm/delete_llm', params);
}
// 获取子模型详情/llm/get_llm/Xinference/qwen2-7b
export function getLlmDetail(id, val) {
  return axios.get(`/api/v1/llm/get_llm/${id}/${val}`);
}

// 新增模型
export function addLlmFactory(params) {
  return axios.post('/api/v1/llm/add_llm_factory', params);
}

// 删除模型
export function deleteLlmFactory(name) {
  return axios.delete(`/api/v1/llm/delete_llm_factory/${name}`);
}

//编辑模型
export function editLlmFactory(params) {
  return axios.put('/api/v1/llm/edit_llm_factory', params);
}

// 获取模型详情显示像
export function getFactoryDetail(params) {
  return axios.get('/api/v1/llm/factory_config',{
    params,
  });
}

// 获取模型列表 
export function getFactories(params) {
  return axios.get('/api/v1/llm/factories', {
    params,
  });
}
