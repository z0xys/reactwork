
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Grid, Heading, Text } from '@radix-ui/themes';

const SiteForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/SiteLocations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('New site location added:', result);
                navigate('/app/sitelocation/view');
            } else {
                console.error('Error adding site location:', response.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='pl-5'>
            <div className='p-5 pl-0'>
                <Heading weight={'bold'}>
                    Add new site location
                </Heading>
                <Text as='span' color='gray' size={2} className='text-center'>Fill in this form to add new site location.</Text>
            </div>
            <div>
                <label>Site Location Name:</label>
                {errors.siteLocationName?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.siteLocationName?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('siteLocationName', { required: true})}
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
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('contactPerson', { required: true, maxLength: 20 })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <label>Contact No:</label>
                {errors.contactNo?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {errors.contactNo?.type === 'pattern' && (
                    <span>Enter only number</span>
                )}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="number"
                    {...register('contactNo', { required: true, pattern: /^[0-9]+$/ })}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    
                />
                </div> 
            </div>
            <div className='mt-5'>
                <Button size={'3'} type="submit">Submit</Button>
            </div>
            </div>
            
        </form>
    )
}

export default SiteForm;