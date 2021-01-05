

const Input = (props) => {

  const onChangeInput = (e)=>{
    const fieldName = props.name;
    const fieldValue = e.target.value;
    const existingData = props.dataForm; 

    existingData[props.name].value = fieldValue;

    let { isValid , errorMessage } = checkValidate( fieldValue , existingData[props.name].validator);

    existingData[props.name].error.status = !isValid;
    existingData[props.name].error.message = errorMessage;

    console.log(existingData);

    props.setDataForm({
      ...existingData
  });
  }

  const checkValidate = (inputField,rules) =>{

    let isValid = true;
    let inputFieldTrim = inputField.trim();
    let errorMessage = '';
    
    if(rules.required && inputFieldTrim.length == 0){
      isValid = false;
      errorMessage = 'กรุณากรอก'
    }else if(rules.minLength && inputFieldTrim.length < rules.minLength){
      isValid = false;
      errorMessage = `กรุณากรอกอย่างน้อย${rules.minLength}ตัวอักษร`
    }else if(rules.maxLength && inputFieldTrim.length > rules.minLength){
      isValid = false;
      errorMessage = `กรุณากรอกไม่เกิน${rules.maxLength}อักษร`
    }

    return { isValid , errorMessage };

  }


  return (
    <div className="control">
      <p className="subtitle is-6 mb-1 ml-4">{props.label}</p>
      <input className="input  is-rounded kanit-font"  type={props.type} onChange={onChangeInput} />
      {props.errorStatus && (
        <p className="subtitle is-6 has-text-danger mb-1 ml-4 is-italic">
          * {props.errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
