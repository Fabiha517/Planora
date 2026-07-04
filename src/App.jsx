import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import All from "./pages/All";
import TodoFilters from "./components/TodoFilters";
import "./index.css";
import EmptyCompleted from "./Images/EmptyCompleted.png";
import NoActive_ from "./Images/NoActive_.png";
import NoTask from "./Images/NoTask.png"
import DashboardSidebar from "./components/DashboardSidebar";

function App() {
	const [todos, setTodo] = useState( ()=> {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
}); ;
	const [text, setText] = useState();
	const [filter, setFilter] = useState("all");
	const [editingId, setEditingId] = useState(null);
	const [showEdit, setShowEdit] = useState(true);

	const activeTodos = todos.filter((todos) => !todos.completed);
	const completedTodos = todos.filter((todos) => todos.completed);

	useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

	const colors = [
		{ bg: "#FCEFE1", tag: "#FADBC5", text: "#C46B2D" },
		{ bg: "#E9F6E5", tag: "#D9F0D2", text: "#4F8A4B" },
		{ bg: "#EADCF8", tag: "#D8BFF0", text: "#7C3FA3" },
		{ bg: "#E5EEFC", tag: "#D6E7FF", text: "#3B82C4" },
		{ bg: "#F9DCE6", tag: "#F6C9D8", text: "#B84A6B" },
	];

	const deleteTodo = (id) => {
		setTodo(todos.filter((todo) => todo.id !== id));
	};

	const handleEdit = (id) => {
		const todo = todos.find((todo) => todo.id === id);
		if (todo) {
			setText(todo.desc);
			setEditingId(id);
		}
	};

	const toggleTodo = (id) => {
		setTodo(todos.map((todo) =>
			todo.id === id ? { ...todo, completing: true } : todo
		));
		setTimeout(() => {
			setTodo(todos.map((todo) =>
				todo.id === id
					? { ...todo, completed: !todo.completed, completing: false }
					: todo
			));
		}, 700);
	};

	const saveTodo = () => {
		if (!text?.trim()) return;
		if (editingId !== null) {
			setTodo(todos.map((todo) =>
				todo.id === editingId ? { ...todo, desc: text } : todo
			));
			setEditingId(null);
		} else {
			setTodo([
				...todos,
				{
					id: Date.now(),
					desc: text,
					color: colors[Math.floor(Math.random() * colors.length)],
					completed: false,
					completing: false,
				},
			]);
		}
		setText("");
	};

	return (
		<div className="min-h-screen bg-[#0B0E12] flex flex-col md:flex-row">
			{/* Filters (Sidebar on desktop, bottom on mobile) */}
			<TodoFilters setFilter={setFilter} filter={filter} />

			{/* Main Content */}
			<div className="flex-1 flex flex-col ">
				<div className="p-5 flex-1">
					<Navbar />
					
					<div className="max-h-[78.5vh] overflow-auto pt-4 md:max-h-[100%]">
					{filter === "all" &&
							(todos.length !== 0 ? (
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
										<p className="font-bold text-xl text-white">Ready to get organized?</p>
										<p className="text-[#35404f]">Add your first task and let Planora keep you on track.</p>
									</div>
								</>
							))}

						{filter === "active" &&
							(activeTodos.length !== 0 ? (
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
										<p className="text-[#35404f]">You've completed every active task.</p>
									</div>
								</>
							))}

						{filter === "completed" &&
							(completedTodos.length !== 0 ? (
								<>
									<Completed completedTodos={completedTodos.length} />
									{completedTodos.map((t) => (
										<Todo 
											key={t.id} 
											todos={t} 
											toggleTodo={toggleTodo} 
											deleteTodo={deleteTodo}
											showEdit={false} 
											editingId={editingId} 
										/>
									))}
								</>
							) : (
								<>
									<Completed completedTodos={completedTodos.length} />
									<div className="h-full flex flex-col items-center justify-center">
										<img src={EmptyCompleted} alt="" className="h-[30vh] "/>
										<p className="font-bold text-xl text-white">No completed tasks yet</p>
										<p className="text-[#35404f]">Keep Going, you're doing amazing! ✨</p>
									</div>
								</>
							))}
					</div>
				</div>
			</div>
			<DashboardSidebar completedTodos={completedTodos.length} todos={todos.length} activeTodos={activeTodos.length} />
		</div>
	);
}

export default App;