const TOKEN_KEY = 'token';
const Authorization = 'Authorization';
const UserInfo = 'userInfo';
const UserResources='userResources'

const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};


const getAuthorization = () => {
  return localStorage.getItem(Authorization);
};

const setAuthorization = (authorization: string) => {
  localStorage.setItem(Authorization, authorization);
};

const getUserInfo = () => {
  return localStorage.getItem(UserInfo);
};

const setUserInfo = (info: string) => {
  localStorage.setItem(UserInfo, info);
};

const getUserResources = () => {
  return localStorage.getItem(UserResources);
};

const setUserResources = (info: string) => {
  localStorage.setItem(UserResources, info);
};

const clearUserResources = () => {
  localStorage.removeItem(UserResources);
};

export { isLogin, getToken, setToken, clearToken,getAuthorization, setAuthorization, getUserInfo, setUserInfo,setUserResources,getUserResources,clearUserResources};
