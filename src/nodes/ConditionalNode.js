import React, {useState} from 'react';
import {Position} from 'reactflow';
import {BaseNode} from './BaseNode';

export const ConditionalNode = ({id, data}) => {
	const [condition, setCondition] = useState(data?.condition || 'x > 0');

	const handleConditionChange = e => setCondition(e.target.value);

	const content = (
		<div>
			<label>
				Condition:
				<input
					type='text'
					value={condition}
					onChange={handleConditionChange}
				/>
			</label>
		</div>
	);

	return (
		<BaseNode
			id={id}
			data={{label: 'Conditional Node', content}}
			type='conditional'
			handles={[
				{type: 'target', position: Position.Left, id: `${id}-input`},
				{type: 'source', position: Position.Right, id: `${id}-true`},
				{type: 'source', position: Position.Right, id: `${id}-false`, style: {top: '75%'}}
			]}
		/>
	);
};
