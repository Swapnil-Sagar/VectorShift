import {useState} from 'react';
import Popup from './popup';
import {useStore} from './store';

export const SubmitButton = () => {
	const {nodes, edges} = useStore();
	const [popupVisible, setPopupVisible] = useState(false);
	const [popupData, setPopupData] = useState(null);

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
			setPopupData(data);
			setPopupVisible(true);
		} catch (error) {
			console.error('Error submitting pipeline:', error);
			alert('An error occurred while submitting the pipeline.');
		}
	};

	const handleClosePopup = () => {
		setPopupVisible(false);
	};

	return (
		<div className='flex items-center justify-center mt-4'>
			<button
				type='submit'
				disabled={nodes.length === 0 && edges.length === 0}
				onClick={handleSubmit}
				className='disabled:from-gray-500 disabled:to-gray-800 disabled:shadow-none  disabled:cursor-not-allowed text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:shadow-gray-500/50 dark:disabled:shadow-none'>
				Submit Pipeline
			</button>
			<Popup
				isVisible={popupVisible}
				onClose={handleClosePopup}
				data={popupData}
			/>
		</div>
	);
};
