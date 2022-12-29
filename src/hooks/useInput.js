import React, {useState} from 'react';

const useInput = (initialValue) => {

    const [value, setValue] = useState(initialValue);

    const onChange=(e)=>{
        setValue(e.target.value)
    }
   const  placeholder='input here'

    return {
      value, onChange,placeholder
    }
};

export default useInput;
