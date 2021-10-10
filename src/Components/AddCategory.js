import React, {useState} from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCateg}) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCateg(cate => [inputValue, ...cate]);
            setInputValue("");
        }

    }

    return (
        <form onSubmit = { handleSubmit }>
            <p>{inputValue}</p>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleInputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCateg: PropTypes.func.isRequired 
}

AddCategory.propTypes = {
    setCateg: PropTypes.func.isRequired
}

export default AddCategory
