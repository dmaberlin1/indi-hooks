import React, {useState} from 'react';

const useBtn = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onClick=(e)=>{
        setValue(initialValue)
    }

    return{
     value,onClick
    }
};

export default useBtn;
