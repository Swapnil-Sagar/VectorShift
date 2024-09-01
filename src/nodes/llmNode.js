import React from 'react';
import {Position} from 'reactflow';
import {BaseNode} from './BaseNode';

export const LLMNode = ({id, data}) => {
	const content = (
		<div>
			<span>This is a LLM.</span>
		</div>
	);

	return (
		<BaseNode
			id={id}
			data={{label: 'LLM Node', content}}
			type='llm'
			handles={[
				{type: 'target', position: Position.Left, id: `${id}-system`, style: {top: `${100 / 3}%`}},
				{type: 'target', position: Position.Left, id: `${id}-prompt`, style: {top: `${200 / 3}%`}},
				{type: 'source', position: Position.Right, id: `${id}-response`}
			]}
		/>
	);
};
