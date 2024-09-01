// BaseNode.js
import React from 'react';
import {Handle, Position} from 'reactflow';

export const BaseNode = ({id, data, type, handles = []}) => {
	const handleStyles = {
		background: '#555',
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		zIndex: 10
	};

	console.log('gandle', handles);
	return (
		<div
			id={id}
			style={{
				width: '200px',
				height: 'auto',
				border: '1px solid black',
				padding: '10px',
				position: 'relative',
				borderRadius: '5px',
				background: '#f9f9f9'
			}}>
			<div style={{marginBottom: '10px', fontWeight: 'bold'}}>{data.label}</div>
			<div>{data.content}</div>
			{handles.map((handle, index) => (
				<div
					key={index}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: handle.position === 'left' ? 'flex-start' : 'flex-end',
						position: 'absolute',
						top: `${handle.position === 'right' ? index + 50 : index * 30}px`, // Adjust top position to prevent overlap
						[handle.position]: '-10px'
					}}>
					<Handle
						type={handle.type}
						position={handle.position}
						id={handle.id}
						style={{margin: '10px', display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
						{handle.title && <span style={{fontSize: '12px', marginRight: '10px', color: '#000000'}}>{handle.title}</span>}
					</Handle>
				</div>
			))}
		</div>
	);
};
