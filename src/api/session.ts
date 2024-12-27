import axios from 'axios';

export interface ISessionListResult {
  code: number;
  msg: string;
  data: any;
}
// 会话列表
export function sessionListApi(dialog_id) {
  return axios.get<ISessionListResult>(
    "/api/conversation/list?modeltype=localragflow&dialogid=" + dialog_id,
  );
}
// 会话列表分页
export function sessionListApiPage(data) {
  return axios.get<ISessionListResult>(
    `/api/conversation/list?modeltype=localragflow&dialogid=&page=${data.page}&per_page=${data.page_size}`,
  );
}
// 删除会话
export function deleteSessionApi(conversation_ids: string[]) {
  return axios.post<ISessionListResult>(
    '/api/conversation/del?modeltype=localragflow',
    { conversation_ids }
  );
}
// 新增会话
export function addSessionApi(params: any) {
  return axios.post<ISessionListResult>(
    '/api/v1/conversation/set?platform=localragflow',
    params
  );
}

// 聊天
export function chatApi(data: { conversation_id: string; messages: string }) {
  return axios.post<ISessionListResult>(
    '/api/tech/cloudminds/query?modeltype=localragflow',
    data
  );
}

// 获取会话详情
export function getSessionDetailsApi(conversation_id: string) {
  return axios.get<ISessionListResult>(
    '/api/conversation/get?modeltype=localragflow',
    { params: { conversation_id } }
  );
}
// 获取智能助手列表
export function getDialogListApi() {
  return axios.get<ISessionListResult>('/api/v1/dialog/list');
}


export function uploadWithoutKb(params) {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // token: token,
    },
  };
  return axios.post('/api/v1/document/upload_without_kb', params, config);
}