const Completed = ({completedTodos }) => {
	return (
		<div>
			<div class="header mb-2 ">
				<h1 className="text-white">COMPLETED TASKS</h1>
				<p className="text-[#1F2937]">
					{
						completedTodos===0?"0 task":completedTodos===1?"1 task":`${completedTodos} tasks`
					}
				</p>
			</div>
			<div class="mb-2">
				<div class="add relative w-full">
		
			</div>
			</div>
		</div>
	);
};

export default Completed;
