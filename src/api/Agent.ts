import axios from 'axios';
import qs from 'query-string';
import type { DescData } from '@arco-design/web-vue/es/descriptions/interface';

// 智能体列表接口
export function querydialogList(params) {
  return axios.get('/api/v1/dialog/list', {
    params,
  });
}

// 智能体详情接口
export function querydialogdetail(params) {
  return axios.get('/api/v1/dialog/get', {
    params,
  });
}

// 智能体聊天接口
export function conversationList(params) {
  return axios.get('/api/v1/conversation/list', {
    params,
  });
}

// 智能体创建/更新接口
export function dialogSet(params) {
  return axios.post('/api/v1/dialog/set', params);
}

// 智能体删除接口
export function deletedialog(params) {
  return axios.post('/api/v1/dialog/rm', params);
}


// agent列表接口
export function queryCanvasList(params) {
  return axios.get('/api/v1/canvas/list', {
    params,
  });
}

// 用户习惯会话列表
export function appUsageSessionListApi(dialog_id) {
  return axios.get(
    "/api/v1/conversation/app_usage"
  );
}

// 用户习惯删除接口
export function deleteAppUsage(params) {
  return axios.post('/api/v1/conversation/app_usage/rm', params);
}

























