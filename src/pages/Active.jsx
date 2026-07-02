const Active = ({ text, setText, activeTodos, saveTodo, editingId }) => {
	return (
		<div>
			<div class="header mb-2 ">
				<h1 className="text-white">ACTIVE TASKS</h1>
				<p className="text-[#1F2937]">
					{activeTodos === 0
						? "0 task"
						: activeTodos === 1
							? "1 task"
							: `${activeTodos} tasks`}
				</p>
			</div>
			<div class="mb-2">
				<div class="add relative w-full">
					<input
						type="text"
						placeholder="What do you want to accomplish?"
						value={text}
						onChange={(e) => {
							setText(e.target.value);
						}}
						className="w-full border rounded-lg px-4 py-2 pr-12 bg-[#FBE6D4] outline-none h-15 sm:text-[16px]
					text-[13px]"
					/>
					
					<button
						className="absolute right-2 top-4 -translate-y-npmr1/2 text-white
				  bg-[#f0ad83] rounded-lg px-2 py-1 hover:bg-[#F59E0B] cursor-pointer"
						onClick={saveTodo}>
						{editingId !==null ? "Update" : "Add"}
					</button>
				</div>
			
			</div>
		</div>
	);
};

export default Active;
