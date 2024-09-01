import React, {useState, useRef, useEffect} from 'react';
import {Position} from 'reactflow';
import {BaseNode} from './BaseNode';
import {useStore} from '../store';

export const TextNode = ({id, data}) => {
	const [currText, setCurrText] = useState(data?.text || '{{input}}');
	const textareaRef = useRef(null);
	const {updateNodeField} = useStore(state => ({
		updateNodeField: state.updateNodeField
	}));

	const adjustTextAreaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	};

	// Adjust height on text change
	useEffect(() => {
		adjustTextAreaHeight();
	}, [currText]);

	const handleTextChange = e => {
		const newText = e.target.value;
		setCurrText(newText);
		updateNodeField(id, 'text', newText);

		const variableMatches = newText.match(/{{\s*([\w]+)\s*}}/g) || [];
		const variableNames = variableMatches.map(variable => variable.replace(/[{}]/g, '').trim());

		const existingHandles = data.handles || [];
		const newHandles = variableNames.map((variableName, index) => ({
			type: 'source',
			position: Position.Left,
			id: `${id}-${variableName}`,
			title: variableName,
			style: {background: '#555', width: '10px', height: '10px', top: `${(index + 1) * 20}px`}
		}));

		if (JSON.stringify(newHandles) !== JSON.stringify(existingHandles)) {
			updateNodeField(id, 'handles', newHandles);
		}
	};

	return (
		<BaseNode
			id={id}
			data={{
				label: 'Text Node',
				content: (
					<div>
						<label>
							Text:
							<textarea
								ref={textareaRef}
								type='text'
								value={currText}
								onChange={handleTextChange}
								style={{width: '100%', boxSizing: 'border-box'}}
							/>
						</label>
					</div>
				)
			}}
			type='text'
			handles={[{type: 'source', position: Position.Right, id: `${id}-output`}, ...(data.handles || [])]}
		/>
	);
};
