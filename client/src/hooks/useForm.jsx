import React, {useState} from 'react'

const useForm = callback => {
    const [inputs, setInputs] = useState({})

    const handleChange = ({ target: { value, name } }) => setInputs(inputs => ({ ...inputs, [name]: value }));

    const handleSubmit = e => {
        if (e) {
            e.preventDefault();
        }
        callback
    }
    return {
        handleChange,
        handleSubmit,
        inputs
    }
}

export default useForm
