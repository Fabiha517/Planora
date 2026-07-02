import { useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import All from "./pages/All";
import TodoFilters from "./components/TodoFilters";
import "./index.css";
import EmptyCompleted from "./Images/EmptyCompleted.png";
import NoActive_ from "./Images/NoActive_.png";

function App() {
	const [todos, setTodo] = useState([]) ;
	const [text, setText] = useState();
	const [filter, setFilter] = useState("all");
	const [editingId, setEditingId] = useState(null);
const [showEdit, setShowEdit] = useState(true)

	const activeTodos = todos.filter((todos) => !todos.completed);
	const completedTodos = todos.filter((todos) => todos.completed);

	const colors = [
		{
			bg: "#FCEFE1",
			tag: "#FADBC5",
			text: "#C46B2D",
		},
		{
			bg: "#E9F6E5",
			tag: "#D9F0D2",
			text: "#4F8A4B",
		},
		{
			bg: "#EADCF8",
			tag: "#D8BFF0",
			text: "#7C3FA3",
		},
		{
			bg: "#E5EEFC",
			tag: "#D6E7FF",
			text: "#3B82C4",
		},
		{
			bg: "#F9DCE6",
			tag: "#F6C9D8",
			text: "#B84A6B",
		},
	];

	const deleteTodo = (id) => {

		setTodo(
			todos.filter((todo) => 
				todo.id != id 
			),
		);
	};

	const handleEdit = (id) => {
		const todo = todos.find((todo) => {
			return todo.id === id;
		});
		if (todo) {
			setText(todo.desc);
			setEditingId(id);
		}
	};

	const toggleTodo = (id) => {
		setTodo(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completing: true } : todo,
			),
		);
		setTimeout(() => {
			setTodo(
				todos.map((todo) =>
					todo.id === id
						? { ...todo, completed: !todo.completed, completing: false }
						: todo,
				),
			);
		}, 700);
	};

	const saveTodo = () => {
		if (!text.trim()) return;
		if (editingId != null) {
			setTodo(
				todos.map((todo) =>
					todo.id === editingId ? { ...todo, desc: text } : todo,
				),
			);
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
		<>
			<div className="Container">
				<div className="  m-auto p-5 min-h-screen">
					<Navbar className="sticky top-2  bg-[#0B0E12]" />
					<div className="max-h-[78.5vh] overflow-auto">
						{filter === "all" && (
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
						)}
						{filter == "active" &&
							(activeTodos.length != 0 ? (
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
								<>
									<Active
										activeTodos={activeTodos.length}
										text={text}
										setText={setText}
										activeTodos={activeTodos.length}
										saveTodo={saveTodo}
										editingId={editingId}
									/>
									<div className=" h-full flex flex-col items-center align-middle  ">
										<img src={NoActive_} alt="" className="max-h-[29vh] " />
										<p className="font-bold text-xl text-white">
											Nothing left to do!
										</p>
										<p className="text-[#35404f]">
											You've completed every active task.
										</p>
										<p className="text-[#35404f]">
											Take a break—you've earned it! 🎉
										</p>
									</div>
								</>
							))}
						{filter === "completed" &&
							(completedTodos.length != 0 ? (
								<>
									<Completed completedTodos={completedTodos.length}  />
	{completedTodos.map((t) => (
<Todo key={t.id} todos={t} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
showEdit={false}   editingId={editingId} />
									))}
								</>
							) : (
								<>
									<Completed completedTodos={completedTodos.length} />
									<div className=" h-full flex flex-col items-center align-middle  ">
										<img src={EmptyCompleted} alt="" />
										<p className="font-bold text-xl text-white">
											No completed tasks yet
										</p>
										<p className="text-[#35404f]">Great things take time</p>
										<p className="text-[#35404f]">
											Keep Going,you're doing amazing!✨
										</p>
									</div>
								</>
							))}
					</div>
				</div>
				<div>
					<TodoFilters setFilter={setFilter} filter={filter} />
				</div>
			</div>
		</>
	);
}

export default App;
