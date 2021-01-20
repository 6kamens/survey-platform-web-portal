import axios from 'axios';
import {checkIsEmail , checkValidate} from "../../common/components/Input";

const API_URL = "http://localhost:4000/api";

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

const validateForm = (formData,existingData,setDataForm)=>{
    
    let result = true;
  
    for(let items of formData){

      const fieldName = items.name;
      const fieldValue = items.value;

      existingData[items.name].value = fieldValue;

      let { isValid, errorMessage } = checkValidate(
        fieldValue,
        existingData[items.name].validator
      );
      
      if(result) result = isValid ;

      existingData[items.name].error.status = !isValid;
      existingData[items.name].error.message = errorMessage;
  

    }

    setDataForm({
      ...existingData,
    });

    return result;
    
}


export {
    validateForm,
    authUserPasswordLogin,
    authUserToken
};