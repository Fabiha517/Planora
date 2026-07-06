import { useOutletContext } from "react-router-dom";
import All from "./All";
import Todo from "../components/Todo";
import NoTask from "../Images/NoTask.png";
const AllPages = () => {
	const {
		todos,
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
			{todos.length !== 0 ? (
				<>
					<All
						text={text}
						setText={setText}
						todos={todos.length}
						saveTodo={saveTodo}
						editingId={editingId}
					/>
					{todos.map((t) => (
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
					<All
						todos={todos.length}
						text={text}
						setText={setText}
						saveTodo={saveTodo}
						editingId={editingId}
					/>
					<div className="h-full flex flex-col items-center justify-center">
						<img src={NoTask} alt="" className="max-h-[29vh] mt-8" />
						<p className="font-bold text-xl text-white">
							Ready to get organized?
						</p>
						<p className="text-[#35404f]">
							Add your first task and let Planora keep you on track.
						</p>
					</div>
				</>
			)}
		</>
	);
};

export default AllPages;
