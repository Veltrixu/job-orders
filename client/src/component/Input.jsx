import React from 'react';

const Input = ({ type, name, placeholder, value, onChange, required }) => {
    return (
        <>
            <label htmlFor={name} className='font-medium text-[#333333]'>{placeholder}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className='border-1 border-[#00000080] p-[0.25rem_0.75rem] text-[0.9rem] rounded-sm w-full mb-2'
                required={required}
            />
        </>
    );
};

export default Input;
