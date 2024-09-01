import React, {useState} from 'react';
import {Position} from 'reactflow';
import {BaseNode} from './BaseNode';

export const ValidationNode = ({id, data}) => {
	const [validationRule, setValidationRule] = useState(data?.rule || 'Non-Empty');

	const handleRuleChange = e => setValidationRule(e.target.value);

	const content = (
		<div>
			<label>
				Rule:
				<select
					value={validationRule}
					onChange={handleRuleChange}>
					<option value='Non-Empty'>Non-Empty</option>
					<option value='Valid Email'>Valid Email</option>
					<option value='Numeric Range'>Numeric Range</option>
				</select>
			</label>
		</div>
	);

	return (
		<BaseNode
			id={id}
			data={{label: 'Validation Node', content}}
			type='validation'
			handles={[
				{type: 'target', position: Position.Left, id: `${id}-input`},
				{type: 'source', position: Position.Right, id: `${id}-output`}
			]}
		/>
	);
};
