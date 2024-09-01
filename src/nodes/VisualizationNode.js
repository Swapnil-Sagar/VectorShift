// VisualizationNode.js
import React from 'react';
import {Position} from 'reactflow';
import {BaseNode} from './BaseNode';

export const VisualizationNode = ({id, data}) => {
	const content = (
		<div>
			{/* Simple visualization (could be a placeholder for a real chart) */}
			<div style={{width: '100%', height: '50px', backgroundColor: '#ddd', margin: '5px 0'}}>Chart Placeholder</div>
		</div>
	);

	return (
		<BaseNode
			id={id}
			data={{label: 'Visualization Node', content}}
			type='visualization'
			handles={[{type: 'target', position: Position.Left, id: `${id}-data`}]}
		/>
	);
};
