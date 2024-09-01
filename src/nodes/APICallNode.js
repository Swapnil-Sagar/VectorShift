// APICallNode.js
import React, {useState} from 'react';
import {Position} from 'reactflow';
import {BaseNode} from './BaseNode';

export const APICallNode = ({id, data}) => {
	const [url, setUrl] = useState(data?.url || '');
	const [method, setMethod] = useState(data?.method || 'GET');

	const handleUrlChange = e => setUrl(e.target.value);
	const handleMethodChange = e => setMethod(e.target.value);

	const content = (
		<div>
			<label>
				URL:
				<input
					type='text'
					value={url}
					onChange={handleUrlChange}
				/>
			</label>
			<label>
				Method:
				<select
					value={method}
					onChange={handleMethodChange}>
					<option value='GET'>GET</option>
					<option value='POST'>POST</option>
					<option value='PUT'>PUT</option>
					<option value='DELETE'>DELETE</option>
				</select>
			</label>
		</div>
	);

	return (
		<BaseNode
			id={id}
			data={{label: 'API Call Node', content}}
			type='apiCall'
			handles={[
				{type: 'target', position: Position.Left, id: `${id}-input`},
				{type: 'source', position: Position.Right, id: `${id}-response`}
			]}
		/>
	);
};
