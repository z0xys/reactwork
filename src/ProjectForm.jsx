import React from "react";
import { useForm } from 'react-hook-form';

const ProjectForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Name:</label>
            <input
                type="text"
                {...register('name', { required: true, maxLength: 20 })}
            />
            {errors.name?.type === 'required' && (
                <span>This field is required</span>
            )}
            {errors.name?.type === 'maxLength' && (
                <span>Name cannot exceed 20 characters</span>
            )}
        </div>

        <div>
            <label>Email:</label>
            <input
                type="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === 'required' && (
                <span>This field is required</span>
            )}
            {errors.email?.type === 'pattern' && (
                <span>Please enter a valid email address</span>
            )}
        </div>

        <button type="submit">Submit</button>
    </form>
    )
}

export default ProjectForm;