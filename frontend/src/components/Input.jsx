// const Input = ({ icon: Icon, ...props }) => {
// 	return (
// 		<div className='relative mb-4'>
// 			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
// 				<Icon className='size-5 text-gray-800' />
// 			</div>
// 			<input
// 				{...props}
// 				className='w-full pl-10 pr-3 py-3 rounded-lg border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 text-black placeholder-gray-400 transition duration-200'
// 			/>
// 		</div>
// 	);
// };
// export default Input;

const Input = ({ icon: Icon, error, ...props }) => {
	return (
		<div className='relative mb-4'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='h-5 w-5 text-gray-800' aria-hidden="true" />
			</div>
			<input
				{...props}
				className={`w-full pl-10 pr-3 py-3 rounded-lg border transition duration-200 
					${error ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500' : 'border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600'}
					text-black placeholder-gray-400`}
				aria-label={props.placeholder} 
			/>
			{error && <p className='text-red-500 text-sm mt-1'>{error}</p>} 
		</div>
	);
};

export default Input;
