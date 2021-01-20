import axios from 'axios';
import {checkIsEmail , checkValidate} from "../../common/components/Input";


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

const validateForm = (formData, existingData, setDataForm) => {

    let result = true;

    for (let items of formData) {

        const fieldName = items.name;
        const fieldValue = items.value;

        existingData[items.name].value = fieldValue;

        let {
            isValid,
            errorMessage
        } = checkValidate(
            fieldValue,
            existingData[items.name].validator
        );

        if (result) result = isValid;

        existingData[items.name].error.status = !isValid;
        existingData[items.name].error.message = errorMessage;


    }

    setDataForm({
        ...existingData,
    });

    return result;

}


export {
    authRegister,
    validateForm
};