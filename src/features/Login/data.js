import {checkIsEmail , checkValidate} from "../../common/components/Input";


export const validateForm = (formData,existingData,setDataForm)=>{
    
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