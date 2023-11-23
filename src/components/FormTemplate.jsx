import React from "react";

const FormTemplate = (props) => {
    const { label } = props;
    return (
        <div className="w-full my-1 ">
            <label htmlFor="" className="mb-4 mt-4 text-gray-600 text-sm dark:text-white/75">
                {label}
            </label>
            {props.children}
        </div>
    );
};

export default FormTemplate;