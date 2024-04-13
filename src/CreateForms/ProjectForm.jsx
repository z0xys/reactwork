
import { useForm } from 'react-hook-form';

const ProjectForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Project Code:</label>
                {errors.projectCode?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.projectCode?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="text"
                    {...register('projectCode', { required: true, maxLength: 20 })}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
                
                </div> 
            </div>

            <div>
                <label>Project Name:</label>
                {errors.projectName?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {errors.projectName?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="text"
                    {...register('projectName', { required: true, maxLength: 20 })}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder='pname'
                />
                </div> 
            </div>

            <div>
                <label>Project Manager:</label>
                <input
                    type="text"
                    {...register('projectManager', { required: true, maxLength: 20 })}
                />
                {errors.projectManager?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.projectManager?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
            </div>

            <div>
                <label>Address:</label>
                <input
                    type="text"
                    {...register('address', { required: true, maxLength: 20 })}
                />
                {errors.address?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.address?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
            </div>

            <div>
                <label>Project Duration:</label>
                <input
                    type="text"
                    {...register('projectDuration', { required: true, maxLength: 20 })}
                />
                {errors.projectDuration?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.projectDuration?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
            </div>

            <div>
                <label>GST Number:</label>
                <input
                    type="text"
                    {...register('gstNumber', { required: true, maxLength: 20 })}
                />
                {errors.gstNumber?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.gstNumber?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
            </div>

            <div>
                <label>Agreement Number:</label>
                <input
                    type="number"
                    {...register('agreementNumber', { required: true, pattern: /^[0-9]+$/ })}
                />
                {errors.agreementNumber?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.agreementNumber?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
            </div>

            <div>
                <label>Date:</label>
                <input
                    type="date"
                    {...register('date', { required: true })}
                />
                {errors.date?.type === 'required' && (
                    <span>This field is required</span>
                )}
            </div>

            <div>
                <label>Extended Duration:</label>
                <input
                    type="text"
                    {...register('extendedDuration', { required: true, maxLength: 20 })}
                />
                {errors.extendedDuration?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.extendedDuration?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
            </div>

            <div>
                <label>Billing Address:</label>
                <input
                    type="text"
                    {...register('billingAddress', { required: true, maxLength: 20 })}
                />
                {errors.billingAddress?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.billingAddress?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
            </div>

            <div>
                <label>Remarks:</label>
                <input
                    type="text"
                    {...register('remarks', { required: true, maxLength: 50 })}
                />
                {errors.remarks?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.remarks?.type === 'maxLength' && (
                    <span>Name cannot exceed 50 characters</span>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default ProjectForm;