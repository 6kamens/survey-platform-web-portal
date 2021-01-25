import {
    setAccessToken,
    removeAccessToken,
    getAccessToken,
    setRefreshToken,
    removeRefreshToken,
    getRefreshToken
} from './tokenStorage';


const login = ({accessToken,refreshToken}) => {

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
}

const logout = () => {

    removeAccessToken();
    removeRefreshToken();

}

const isLogin = () => {

    if (!getAccessToken() || !getRefreshToken()) {
        return false;
    }

    return true;
}

export default {
    login,
    logout,
    isLogin 
}