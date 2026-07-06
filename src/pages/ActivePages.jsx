import { useOutletContext } from "react-router-dom";
import Active from "./Active";
import NoActive_ from "../Images/NoActive_.png";
import Todo from "../components/Todo";
const ActivePages = () => {
	const {
		activeTodos,
		text,
		setText,
		saveTodo,
		editingId,
		toggleTodo,
		handleEdit,
		deleteTodo,
		showEdit,
	} = useOutletContext();
	return (
		<>
			{activeTodos.length !== 0 ? (
				<>
					<Active
						text={text}
						setText={setText}
						activeTodos={activeTodos.length}
						saveTodo={saveTodo}
						editingId={editingId}
					/>
					{activeTodos.map((t) => (
						<Todo
							key={t.id}
							todos={t}
							toggleTodo={toggleTodo}
							handleEdit={handleEdit}
							deleteTodo={deleteTodo}
							showEdit={showEdit}
							editingId={editingId}
						/>
					))}
				</>
			) : (
				// Empty state remains same
				<>
					<Active
						activeTodos={activeTodos.length}
						text={text}
						setText={setText}
						saveTodo={saveTodo}
						editingId={editingId}
					/>
					<div className="h-full flex flex-col items-center justify-center">
						<img src={NoActive_} alt="" className="max-h-[29vh] mt-8" />
						<p className="font-bold text-xl text-white">Nothing left to do!</p>
						<p className="text-[#35404f]">
							You've completed every active task.
						</p>
					</div>
				</>
			)}
		</>
	);
};

export default ActivePages;
