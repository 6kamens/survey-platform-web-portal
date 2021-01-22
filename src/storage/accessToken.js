
const accessTokenKey = 'ACCESS_TOKEN';

const getAccessToken = () => {
   return localStorage.getItem(accessTokenKey);
}

const setAccessToken = (value) => {
    localStorage.setItem(accessTokenKey,value);
}

const removeAccessToken = () => {
    localStorage.removeItem(accessTokenKey);
}


export {
    getAccessToken,
    setAccessToken,
    removeAccessToken
};