import React from 'react';

const Popup = ({isVisible, onClose, data}) => {
	if (!isVisible) return null;

	return (
		<div
			className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'
			style={{
				opacity: isVisible ? 1 : 0,
				pointerEvents: isVisible ? 'auto' : 'none'
			}}>
			<div className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow-lg w-80 transition-transform duration-300'>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-bold'>Pipeline Status</h2>
				</div>
				<div className='mt-4 grid grid-cols-1 gap-2'>
					<p>
						<strong>Number of Nodes:</strong> {data.num_nodes}
					</p>
					<p>
						<strong>Number of Edges:</strong> {data.num_edges}
					</p>
					<p>
						<strong>Is DAG:</strong> {data.is_dag ? 'Yes' : 'No'}
					</p>
				</div>
				<div className='mt-4 flex justify-end'>
					<button
						onClick={onClose}
						className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300'>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
