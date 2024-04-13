
import { useForm } from 'react-hook-form';
import { Button, Flex, Grid, Heading, Text } from '@radix-ui/themes';

const ProjectForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className='pl-5'>
                <div className='p-5 pl-0'>
                    <Heading weight={'bold'}>
                        Add new project
                    </Heading>

                    <Text as='span' color='gray' size={2} className='text-center'>Fill in this form to add new project.</Text>
                </div>

                <Grid columns={'2'} gapY={'4'}>
                    <div>
                        <label className='font-medium'>Project Code:</label>
                        {errors.projectCode?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        {errors.projectCode?.type === 'maxLength' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 20 characters</span>
                        )}
                        <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                           <input
                                type="text"
                                {...register('projectCode', { required: true, maxLength: 20 })}
                                className=" block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                
                            />
                        </div>
                    </div>

                    <div>
                        <label>Project Name:</label>
                        {errors.projectName?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        {errors.projectName?.type === 'maxLength' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 20 characters</span>
                        )}
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                {...register('projectName', { required: true, maxLength: 20 })}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"

                            />
                        </div>
                    </div>

                    <div>
                        <label>Project Manager:</label>
                        {errors.projectManager?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        {errors.projectManager?.type === 'maxLength' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 20 characters</span>
                        )}
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                {...register('projectManager', { required: true, maxLength: 20 })}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label>Address:</label>
                        {errors.address?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        {errors.address?.type === 'maxLength' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 20 characters</span>
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

                    <div>
                        <label>Project Duration:</label>
                        {errors.projectDuration?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        {errors.projectDuration?.type === 'maxLength' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 20 characters</span>
                        )}
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                {...register('projectDuration', { required: true, maxLength: 20 })}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder='pname'
                            />
                        </div>
                    </div>

                    <div>
                        <label>GST Number:</label>
                        {errors.gstNumber?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        {errors.gstNumber?.type === 'maxLength' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 20 characters</span>
                        )}
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                {...register('gstNumber', { required: true, maxLength: 20 })}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder='pname'
                            />
                        </div>
                    </div>
                    <div>
                        <label>Agreement Number:</label>
                        {errors.agreementNumber?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        {errors.agreementNumber?.type === 'maxLength' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 20 characters</span>
                        )}
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="number"
                                {...register('agreementNumber', { required: true, pattern: /^[0-9]+$/ })}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label>Date:</label>
                        {errors.date?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="date"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                {...register('date', { required: true })}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Extended Duration:</label>
                        {errors.extendedDuration?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        {errors.extendedDuration?.type === 'maxLength' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 20 characters</span>
                        )}
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                {...register('extendedDuration', { required: true, maxLength: 20 })}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label>Billing Address:</label>
                        {errors.billingAddress?.type === 'required' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                        )}
                        {errors.billingAddress?.type === 'maxLength' && (
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 20 characters</span>
                        )}
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                {...register('billingAddress', { required: true, maxLength: 20 })}
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
                            <span className='text-red-500 text-sm mt-2 ml-2'>Name cannot exceed 50 characters</span>
                        )}
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                {...register('remarks', { required: true, maxLength: 50 })}
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

export default ProjectForm;