import axios from 'axios';

export interface ISessionListResult {
  code: number;
  msg: string;
  data: any;
}
// 会话列表
// export function sessionListApi(dialog_id) {
//   return axios.get<ISessionListResult>(
//     "/api/conversation/list?modeltype=localragflow&dialogid=" + dialog_id
//   );
// }
// 删除会话
// export function deleteSessionApi(conversation_ids: string[]) {
//   return axios.post<ISessionListResult>(
//     '/api/conversation/del?modeltype=localragflow',
//     { conversation_ids }
//   );
// }
// 新增会话
// export function addSessionApi(params: any) {
//   return axios.get<ISessionListResult>(
//     '/api/getConId/kdwithai?platform=localragflow',
//     { params }
//   );
// }
// 获取智能助手列表
// export function getDialogListApi() {
//   return axios.get<ISessionListResult>('/api/dialog/list');
// }

// 聊天
export function chatAgentApi(data) {
  return axios.post(
    '/api/v1/canvas/completion',
    data
  );
}

// 获取会话详情
export function getAgentSessionDetailsApi(id: string) {
  return axios.get(
    '/api/v1/canvas/get/' + id,
    {}
  );
}
// 设置
export function agentSetApi(data) {
  return axios.post(
    '/api/v1/canvas/set',
    data
  );
}
// 重置
export function agentResetApi(data) {
  return axios.post(
    '/api/v1/canvas/reset',
    data
  );
}