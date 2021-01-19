import axios from 'axios';

const API_URL = "http://localhost:4000/api";

const authRegister = async (username, password, firstName, lastName) => {

    try {
        const response = await axios.post(
            API_URL + '/user/register', {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                clientId: 'e648e8d2-966c-4480-a9fd-719c4ce7d535',
                clientSecret: '40a99419-67be-42d4-91ca-d01c14dc7f73'
            }
        );

        return response;
    } catch (error) {
        return error.response;
    }


}

const authUserPasswordLogin = async (username, password) => {

    try {
        const response = await axios.post(
            API_URL + '/oauth/token', {
                username: username,
                password: password,
                grantType: 'password_credentials',
                clientId: 'e648e8d2-966c-4480-a9fd-719c4ce7d535',
                clientSecret: '40a99419-67be-42d4-91ca-d01c14dc7f73'
            }
        );
        return response;

    } catch (error) {
        return error.response;

    }


}

const authUserToken = async (accessToken) => {

    try {
        const response = await axios.post(
            API_URL + '/oauth/session', {
                accessToken: accessToken,
            }
        );
        return response;

    } catch (error) {
        return error.response;

    }

}


export {
    authRegister,
    authUserPasswordLogin,
    authUserToken
};