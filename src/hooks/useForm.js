// write your custom hook here to control your checkout form
import { useState} from 'react';

const useForm = (initialValues) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValues);

    const handleChanges = (evt) => {
        setValues({ ...values, [evt.target.name]: evt.target.value });
    };
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setShowSuccessMessage(true);
    };

    return [values, handleChanges, handleSubmit, showSuccessMessage];
}

export default useForm;

