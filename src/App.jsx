import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import TodoFilters from "./components/TodoFilters";
import "./index.css";

import DashboardSidebar from "./components/DashboardSidebar";
import { Outlet } from "react-router-dom";
function App() {
	const [todos, setTodo] = useState(() => {
		const saved = localStorage.getItem("todos");
		return saved ? JSON.parse(saved) : [];
	});
	const [text, setText] = useState();
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
		if (!text?.trim()) return;
		if (editingId !== null) {
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
		<div className="min-h-screen bg-[#0B0E12] flex flex-col md:flex-row">
			<TodoFilters />

			<div className="flex-1 flex flex-col ">
				<div className="p-5 flex-1">
					<Navbar />

					<div className="max-h-[78.5vh] overflow-auto pt-4 md:max-h-[100%]">
						<Outlet
							context={{
								todos,
								activeTodos,
								completedTodos,
								text,
								setText,
								saveTodo,
								toggleTodo,
								handleEdit,
								deleteTodo,
								editingId,
								showEdit,
							}}
						/>
					</div>
				</div>
			</div>
			<DashboardSidebar
				completedTodos={completedTodos.length}
				todos={todos.length}
				activeTodos={activeTodos.length}
			/>
		</div>
	);
}

export default App;
