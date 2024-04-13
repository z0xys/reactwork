import { useForm } from 'react-hook-form';
import { Button, Heading, Grid, Card, Flex } from '@radix-ui/themes';

export default function Login() {
	const { register, handleSubmit, formState: { errors } } = useForm();


	const onSubmit = async (data) => {
		// try {
		// 		const response = await fetch('http://localhost:3000/SubDivisions', {
		// 				method: 'POST',
		// 				headers: {
		// 						'Content-Type': 'application/json',
		// 				},
		// 				body: JSON.stringify(data),
		// 		});

		// 		if (response.ok) {
		// 				const result = await response.json();
		// 				console.log('New Sub Division added:', result);
		// 		} else {
		// 				console.error('Error adding Sub Division:', response.status);
		// 		}
		// } catch (error) {
		// 		console.error('An error occurred:', error);
		// }
		if (data) {
			console.log(data);
			
		}
	};


	return (
		<>
			<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">

					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
						<form onSubmit={handleSubmit(onSubmit)}>
							<Flex direction={'column'} gapY={'3'}>
								<div>
									<label>Email Address</label>
									{errors.email?.type === 'required' && (
									<span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
									)}
									{/* {errors.email?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
										<input
											type="email"
											{...register('email', { required: true })}
											placeholder='user@email.com'
											className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										/>

									</div>
								</div>

								<div>
									<label>Password</label>
									{errors.remarks?.type === 'required' && (
										<span className='text-red-500 text-sm mt-2 ml-2'>This field is required</span>
									)}
									{/* {errors.remarks?.type === 'maxLength' && (
                    <span>Name cannot exceed 20 characters</span>
                )} */}
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
										<input
											type="password"
											{...register('remarks', { required: true })}
											className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 outline-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder='password'
										/>
									</div>
								</div>
								<div className='"w-full flex justify-center mt-5'>
                <Button size={'3'}  type="submit">Login</Button>
            </div>
							</Flex>
							
						</form>
					</div>
				</div>
			</div>

		</>
	)

}