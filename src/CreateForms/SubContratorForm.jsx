
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Grid, Heading, Text } from '@radix-ui/themes';

const SubContractorForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/SubContractors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('New Sub Contractor added:', result);
                navigate('/app/subcontractor/view');
            } else {
                console.error('Error adding Sub Contractor:', response.status);
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
                    Add new sub contractor
                </Heading>
                <Text as='span' color='gray' size={2} className='text-center'>Fill in this form to add new sub contractor.</Text>
            </div>
            <Grid columns={'2'} gapY={'4'}>
            <div>
                <label>Name / Firm:</label>
                {errors.nameFirm?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {errors.nameFirm?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('nameFirm', { required: true })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />

                </div>
            </div>

            <div>
                <label>Contact Person:</label>
                {errors.contactPerson?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.contactPerson?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('contactPerson', { required: true })}
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
                    <span>Please provide numbers only</span>
                )}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="number"
                        {...register('contactNo', { required: true, pattern: /^[0-9]+$/ })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        
                    />
                </div>
            </div>

            <div>
                <label>Address:</label>
                {errors.address?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.address?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('address', { required: true })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        
                    />
                </div>
            </div>

            <div>
                <label>State:</label>
                {errors.state?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.state?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('state', { required: true })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        
                    />
                </div>
            </div>

            <div>
                <label>Work Order Id:</label>
                {errors.workOrderId?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.workOrderId?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('workOrderId', { required: true })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        
                    />
                </div>
            </div>

            <div>
                        <label>Date:</label>
                        {errors.date?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="date"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                {...register('date', { required: true })}
                            />
                        </div>
                    </div>

            <div>
                <label>Work Order Details:</label>
                {errors.workOrderDetails?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.workOrderDetails?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('workOrderDetails', { required: true })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        
                    />
                </div>
            </div>

            <div>
                <label>GST No:</label>
                {errors.gst?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.gst?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('gst', { required: true })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        
                    />
                </div>
            </div>

            <div>
                <label>Pan No:</label>
                {errors.pan?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.pan?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('pan', { required: true })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        
                    />
                </div>
            </div>

            <div>
                <label>Email Id:</label>
                {errors.emailId?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.emailId?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="email"
                        {...register('emailId', { required: true })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        
                    />
                </div>
            </div>

            <div>
                <label>Address:</label>
                {errors.address?.type === 'required' && (
                    <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                )}
                {/* {errors.address?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
                <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type="text"
                        {...register('address', { required: true })}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        
                    />
                </div>
                
            </div>
            </Grid>
           
            <div className='mt-5'>
                <Button size={'3'} type="submit">Submit</Button>
            </div>
            </div>
        </form>
    )
}

export default SubContractorForm;