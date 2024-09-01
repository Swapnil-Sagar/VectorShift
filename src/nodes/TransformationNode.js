import React, {useState} from 'react';
import {Position} from 'reactflow';
import {BaseNode} from './BaseNode';

export const TransformationNode = ({id, data}) => {
	const [transformType, setTransformType] = useState(data?.transformType || 'Uppercase');

	const handleTransformChange = e => setTransformType(e.target.value);

	const content = (
		<div>
			<label>
				Transform:
				<select
					value={transformType}
					onChange={handleTransformChange}>
					<option value='Uppercase'>Uppercase</option>
					<option value='Lowercase'>Lowercase</option>
					<option value='Number Increment'>Number Increment</option>
				</select>
			</label>
		</div>
	);

	return (
		<BaseNode
			id={id}
			data={{label: 'Transformation Node', content}}
			type='transformation'
			handles={[
				{type: 'target', position: Position.Left, id: `${id}-input`},
				{type: 'source', position: Position.Right, id: `${id}-output`}
			]}
		/>
	);
};
