// submit.js

import {useStore} from './store';

export const SubmitButton = () => {
	const {nodes, edges} = useStore();

	const handleSubmit = async () => {
		try {
			const response = await fetch('http://localhost:8000/pipelines/parse', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({nodes, edges})
			});

			const data = await response.json();
			alert(`Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
		} catch (error) {
			console.error('Error submitting pipeline:', error);
			alert('An error occurred while submitting the pipeline.');
		}
	};

	return (
		<div className='flex items-center justify-center mt-4'>
			<button
				type='submit'
				className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
				Submit
			</button>
		</div>
	);
};
