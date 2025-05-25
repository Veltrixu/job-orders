import React from 'react';

const Input = ({ type, name, placeholder, value, onChange, required }) => {
    return (
        <>
            <label htmlFor={name} className=' text-[var(--label-gray)] text-[0.875rem]'>{placeholder}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className='border-1 border-[var(--muted-gray)] p-[0.25rem_0.75rem] text-[var(--label-gray)] text-[0.875rem] rounded-sm w-full mb-2'
                required={required}
            />
        </>
    );
};

export default Input;
