
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SubStationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/SubStations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('New Sub Station added:', result);
                navigate('/app/division/view');
            } else {
                console.error('Error adding Sub Station:', response.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Sub Station Name:</label>
                {errors.subStationName?.type === 'required' && (
                    <span>This field is required</span>
                )}
                {errors.subStationName?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('subStationName', { required: true, maxLength: 20 })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />

                </div>
            </div>

            <div>
                <label>Remarks:</label>
                {errors.remarks?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {errors.remarks?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('remarks', { required: true, maxLength: 20 })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder='pname'
                    />
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default SubStationForm;