import DarkModeToggle from './darkMode';
import {DraggableNode} from './draggableNode';

export const PipelineToolbar = () => {
	return (
		<div className='p-4 flex mt-4 justify-between items-center'>
			<div className='flex wrap gap-3 '>
				<DraggableNode
					type='customInput'
					label='Input'
				/>
				<DraggableNode
					type='llm'
					label='LLM'
				/>
				<DraggableNode
					type='customOutput'
					label='Output'
				/>
				<DraggableNode
					type='text'
					label='Text'
				/>
				<DraggableNode
					type='conditional'
					label='Condition'
				/>
				<DraggableNode
					type='apiCall'
					label='API'
				/>
				<DraggableNode
					type='transformation'
					label='Transform'
				/>
				<DraggableNode
					type='validation'
					label='Validate'
				/>
				<DraggableNode
					type='visualization'
					label='Visual'
				/>
			</div>
			<DarkModeToggle />
		</div>
	);
};
