import {checkIsEmail , checkValidate} from "../../common/components/Input";

export const loginInitial = {
    username:{
      name:'username',
      value:'',
      validator:{
        minLength:0,
        maxLength:100,
        required:true,
        // isEmail:true
      },
      error:{
        status:false,
        message:''
      }
    },
    password:{
      name:'password',
      value:'',
      validator:{
        minLength:0,
        maxLength:100,
        required:true
      },
      error:{
        status:false,
        message: ''
      }
    }
};

export const registerInitial ={
    username:{
      name:'username',
      value:'',
      validator:{
        minLength:0,
        maxLength:100,
        required:true,
        isEmail:true
      },
      error:{
        status:false,
        message:''
      }
    },
    password:{
      name:'password',
      value:'',
      validator:{
        minLength:6,
        maxLength:100,
        required:true
      },
      error:{
        status:false,
        message: ''
      }
    },
    firstName:{
      name:'firstName',
      value:'',
      validator:{
        minLength:0,
        maxLength:100,
        required:true
      },
      error:{
        status:false,
        message: ''
      }
    },
    lastName:{
      name:'lastName',
      value:'',
      validator:{
        minLength:0,
        maxLength:100,
        required:true
      },
      error:{
        status:false,
        message: ''
      }
    }
};


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