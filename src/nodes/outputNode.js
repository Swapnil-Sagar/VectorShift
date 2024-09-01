import React, {useState} from 'react';
import {Position} from 'reactflow';
import {BaseNode} from './BaseNode';

export const OutputNode = ({id, data}) => {
	const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
	const [outputType, setOutputType] = useState(data.outputType || 'Text');

	const handleNameChange = e => setCurrName(e.target.value);
	const handleTypeChange = e => setOutputType(e.target.value);

	const content = (
		<div>
			<label>
				Name:
				<input
					type='text'
					value={currName}
					onChange={handleNameChange}
				/>
			</label>
			<label>
				Type:
				<select
					value={outputType}
					onChange={handleTypeChange}>
					<option value='Text'>Text</option>
					<option value='File'>Image</option>
				</select>
			</label>
		</div>
	);

	return (
		<BaseNode
			id={id}
			data={{label: 'Output Node', content}}
			type='customOutput'
			handles={[{type: 'target', position: Position.Left, id: `${id}-value`}]}
		/>
	);
};
