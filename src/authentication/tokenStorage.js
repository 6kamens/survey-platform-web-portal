
const accessTokenKey = 'ACCESS_TOKEN';
const refreshTokenKey = 'REFRESH_TOKEN';

const getAccessToken = () => {
   return localStorage.getItem(accessTokenKey);
}

const setAccessToken = (value) => {
    localStorage.setItem(accessTokenKey,value);
}

const removeAccessToken = () => {
    localStorage.removeItem(accessTokenKey);
}

const getRefreshToken = () => {
    return localStorage.getItem(refreshTokenKey);
 }
 
 const setRefreshToken = (value) => {
     localStorage.setItem(refreshTokenKey,value);
 }
 
 const removeRefreshToken = () => {
     localStorage.removeItem(refreshTokenKey);
 }



export {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
    getRefreshToken ,
    setRefreshToken,
    removeRefreshToken
};