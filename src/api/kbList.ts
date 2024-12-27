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

// 知识库列表接口
export function queryKbList(params) {
  return axios.get('/api/v1/kb/list', {
    params,
  });
}

// 知识库详情接口
export function queryKbdetail(params) {
  return axios.get('/api/v1/kb/detail', {
    params,
  });
}

// 信息接口
export function queryKbtenantInfo(params) {
  return axios.get('/api/v1/user/tenant_info', {
    params,
  });
}

// 文档列表接口
export function queryKbDocumentList(params) {
  return axios.get('/api/v1/document/list', {
    params,
  });
}

// 知识库创建接口
export function kbcreate(params) {
  return axios.post('/api/v1/kb/create', params);
}

// 知识库删除接口
export function deleteKnow(params) {
  return axios.post('/api/v1/kb/rm', params);
}

//知识库更新接口

export function querykbupdate(params) {
  return axios.post('/api/v1/kb/update', params);
}

// 文档上传接口

// export function kbdocumentupload(params) {
//   return axios.post('/api/v1/document/upload', params);
// }

export function kbdocumentupload(params) {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // token: token,
    },
  };
  return axios.post('/api/v1/document/upload', params, config);
}

// 文档启动/取消解析接口

export function kbdocumentrun(params) {
  return axios.post('/api/v1/document/run', params);
}

// 文档删除接口

export function kbdocumentrm(params) {
  return axios.post('/api/v1/document/rm', params);
}

// 文档重命名接口
export function kbdocumentrename(params) {
  return axios.post('/api/v1/document/rename', params);
}

// 文件解析方法接口
export function kbdocumentchangeparser(params) {
  return axios.post('/api/v1/document/change_parser', params);
}

// 文档启用/禁用接口
export function kbdocumentchangeStatus(params) {
  return axios.post('/api/v1/document/change_status', params);
}

// 模型列表接口
export function queryModelList(params) {
  return axios.get('/api/v1/llm/list', {
    params,
  });
}

// 测试接口
export function kbretrievalTest(params) {
  return axios.post('/api/v1/chunk/retrieval_test', params);
}

// 配置接口
export function kbUpdate(params) {
  return axios.post('/api/v1/kb/update', params);
}

// 文档下载接口

export const downloadFile = ({
  url,
  filename,
  target,
}: {
  url: string;
  filename?: string;
  target?: string;
}) => {
  const downloadElement = document.createElement('a');
  downloadElement.style.display = 'none';
  downloadElement.href = url;
  if (target) {
    downloadElement.target = '_blank';
  }
  downloadElement.rel = 'noopener noreferrer';
  if (filename) {
    downloadElement.download = filename;
  }
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
};

// 创建解析块接口
// {
//   "content_with_weight": "对于需要特定旧版本的兼容性或安全性支持的用户有用，但一般不推荐用于新项目，除非有特殊需求。在实际使用中，如果追求最新功能且愿意面对可能存在的一些不稳定因素，可以尝试使用主线版本进行测试和研究；", //解析块
//   "doc_id": "702d916e52fb11ef9a430242ac120006", //文档id
//   "important_kwd": [
//   "主线版本", //关键词1
//   "测试和研究"  //关键词2
// ]
// }
export function achunkCreate(params) {
  return axios.post('/api/v1/chunk/create', params);
}
//解析块列表接口
// {
//   "doc_id": "702d916e52fb11ef9a430242ac120006", //文档id
//   "available_int": 1,    //状态 1 启用 0 禁用，如果取所有的不传此字段
//   "keywords": "关键字",  //搜索关键字
//   "page": 1,
//   "size": 10
// }
export function queryChunkList(params) {
  return axios.post('/api/v1/chunk/list', params);
}

// 启用禁用接口
// {
//   "chunk_ids": [
//   "eb1f032b77e036ffb3737778c8a7395e", //解析块id
//   "1bbd2f27e374c7987e5c959fa5012c7e",
//   "d8ae34facce2fed291188bdc3869b580"
// ],
//   "available_int": 0, // 1启用0禁用
//   "doc_id": "702d916e52fb11ef9a430242ac120006"  //文档id
// }
export function chunkSwitch(params) {
  return axios.post('/api/v1/chunk/switch', params);
}

// 删除解析块接口

// {
//   "chunk_ids": [ //要删除的解析块列表
//   "f4407d84c2e087e8ce0e2fd18b20bfe5"
// ],
//   "doc_id": "702d916e52fb11ef9a430242ac120006" //文档ID
// }
export function chunkRm(params) {
  return axios.post('/api/v1/chunk/rm', params);
}


//启用禁用
export function changeStatus(params) {
  return axios.post('/api/v1/document/change_status', params);
}



export function achunkSet(params) {
  return axios.post('/api/v1/chunk/set', params);
}


export function achunkGet(params) {
  return axios.get('/api/v1/chunk/get', {params});
}















