// draggableNode.js

export const DraggableNode = ({type, label}) => {
	const onDragStart = (event, nodeType) => {
		const appData = {nodeType};
		event.target.style.cursor = 'grabbing';
		event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<div
			className={`cursor-grab text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${type}`}
			onDragStart={event => onDragStart(event, type)}
			onDragEnd={event => (event.target.style.cursor = 'grab')}
			draggable>
			<span className='font-semibold'>{label}</span>
		</div>
	);
};
