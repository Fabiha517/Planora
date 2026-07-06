import Todo from "../components/Todo"
import { useOutletContext } from "react-router-dom"
import Completed from "./Completed"
import EmptyCompleted from "../Images/EmptyCompleted.png"

const CompletedPages = () => {
  const  {
		completedTodos,
		editingId,
		toggleTodo,
		deleteTodo,
	} = useOutletContext();
  return (
   <>
   {completedTodos.length !== 0 ? (
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
							)}
   </>
  )
}

export default CompletedPages
