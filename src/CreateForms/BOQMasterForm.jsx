
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Grid, Heading, Text } from '@radix-ui/themes';

const BOQMasterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/BOQMasters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('New BOQ Master added:', result);
                navigate('/app/boqmaster/view');
            } else {
                console.error('Error adding BOQ Master:', response.status);
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
                        Add new BOQMaster
                    </Heading>
                    <Text as='span' color='gray' size={2} className='text-center'>Fill in this form to add new BOQMaster.</Text>
                </div>
            <Grid columns={'2'} gapY={'4'}>
                <div>
                    <label>Product Name:</label>
                    {errors.productName?.type === 'required' && (
                        <span  className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                    )}
                    {/* {errors.productName?.type === 'maxLength' && (
                        <span>Name cannot exceed 20 characters</span>
                    )} */}
                    <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            {...register('productName', { required: true})}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />

                    </div>
                </div>

                <div>
                    <label>Product Category:</label>
                    {errors.productCategory?.type === 'required' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                    )}
                    {/* {errors.productCategory?.type === 'maxLength' && (
                        <span>Name cannot exceed 20 characters</span>
                    )} */}
                    <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            {...register('productCategory', { required: true})}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label>GST:</label>
                    {errors.gst?.type === 'required' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                    )}
                    {/* {errors.gst?.type === 'maxLength' && (
                        <span>Name cannot exceed 20 characters</span>
                    )} */}
                    <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            {...register('gst', { required: true})}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"

                        />
                    </div>
                </div>

                <div>
                    <label>UOM:</label>
                    {errors.uom?.type === 'required' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                    )}
                    {/* {errors.uom?.type === 'maxLength' && (
                        <span>Name cannot exceed 20 characters</span>
                    )} */}
                    <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            {...register('uom', { required: true})}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            
                        />
                    </div>
                </div>

                <div>
                    <label>BOQ Price:</label>
                    {errors.boqPrice?.type === 'required' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                    )}
                    {errors.boqPrice?.type === 'pattern' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>Please provide only numbers</span>
                    )}
                    <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="number"
                            {...register('boqPrice', { required: true, pattern: /^[0-9]+$/ })}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label>Project BOQ Qty:</label>
                    {errors.projectBoqPrice?.type === 'required' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                    )}
                    {errors.projectBoqPrice?.type === 'pattern' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>Please provide only numbers</span>
                    )}
                    <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="number"
                            {...register('projectBoqPrice', { required: true, pattern: /^[0-9]+$/ })}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label>Ammendment:</label>
                    {errors.ammendment?.type === 'required' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                    )}
                    {errors.ammendment?.type === 'pattern' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>Please provide only numbers</span>
                    )}
                    <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="number"
                            {...register('ammendment', { required: true, pattern: /^[0-9]+$/ })}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"

                        />
                    </div>
                </div>

                <div>
                    <label>Remarks:</label>
                    {errors.remarks?.type === 'required' && (
                        <span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
                    )}
                    {/* {errors.remarks?.type === 'maxLength' && (
                        <span>Name cannot exceed 20 characters</span>
                    )} */}
                    <div className="bg-slate-100 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            {...register('remarks', { required: true})}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            
                        />
                    </div>
                </div>

                <div className='mt-5'>
                    <Button size={'3'} type="submit">Submit</Button>
                </div>
            </Grid>

            </div>
        </form>
    )
}

export default BOQMasterForm;