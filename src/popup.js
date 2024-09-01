import React from 'react';
import {Transition} from '@headlessui/react';

const Popup = ({isVisible, onClose, data}) => {
	return (
		<Transition
			show={isVisible}
			enter='transition-opacity duration-200'
			enterFrom='opacity-0'
			enterTo='opacity-100'
			leave='transition-opacity duration-200'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'>
			<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
				<div className='bg-white dark:bg-gray-800 border-spacing-2 text-gray-900 dark:text-gray-100 p-6 pb-4 rounded-lg shadow-lg w-96 max-w-sm transform transition-transform duration-300'>
					<h2 className='text-2xl w-full text-center font-semibold mb-6'>Pipeline Status</h2>
					<p className='mb-2'>
						<strong>Number of Nodes:</strong> {data?.num_nodes}
					</p>
					<p className='mb-2'>
						<strong>Number of Edges:</strong> {data?.num_edges}
					</p>
					<p className='mb-4'>
						<strong>Is DAG:</strong> {data?.is_dag ? 'Yes' : 'No'}
					</p>
					<button
						onClick={onClose}
						className='w-full mt-4 disabled:from-gray-500 disabled:to-gray-800 disabled:shadow-none  disabled:cursor-not-allowed text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:shadow-gray-500/50 dark:disabled:shadow-none'>
						Close
					</button>
				</div>
			</div>
		</Transition>
	);
};

export default Popup;
