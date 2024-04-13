import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const StoreForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/Stores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('New Store added:', result);
                navigate('/app/store/view');
            } else {
                console.error('Error adding Store:', response.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Store Name:</label>
                {errors.storeName?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.storeName?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('storeName', { required: true, maxLength: 20 })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />

                </div>
            </div>

            <div>
                <label>Contact Person:</label>
                {errors.contactPerson?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {errors.contactPerson?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('contactPerson', { required: true, maxLength: 20 })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder='pname'
                    />
                </div>
            </div>

            <div>
                <label>Contact No:</label>
                {errors.contactNo?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {errors.contactNo?.type === 'pattern' && (
                    <span>Enter appropriate Number</span>
                )}
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="number"
                        {...register('contactNo', { required: true, pattern: /^[0-9]+$/ })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder='pname'
                    />
                </div>
            </div>

            <div>
                <label>Address:</label>
                {errors.address?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {errors.address?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('address', { required: true, maxLength: 20 })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder='pname'
                    />
                </div>
            </div>


            <button type="submit">Submit</button>
        </form>
    )
}

export default StoreForm;