import { FaEdit, FaTrash } from "react-icons/fa";
const Todo = ({todos,toggleTodo,handleEdit,deleteTodo,showEdit,editingId}) => {
	return (
		<div
			 className={`flex items-center p-2 rounded-lg w-full border px-4 py-2 gap-2 min-h-15 sm:text-[16px] text-[13px] transition-all duration-300 mb-2
    ${
      editingId === todos.id
        ? "opacity-80 ring-2 ring-[#B69CF7] border-[#B69CF7]"
        : "border-transparent"
    }`}
      style={{backgroundColor:todos.color.bg}}>
        

      	<input type="checkbox"
       	  checked={todos.completing||todos.completed} 
			
         onChange={()=>toggleTodo(todos.id)}
         className="w-4 h-4 accent-black cursor-pointer" />

			<div className={`flex-1   bg-transparent  text-black resize-none w-[50%] whitespace-normal break-all
				 ${todos.completed||todos.completing ? 'line-through' : ''}` }
     >
				{todos.desc}
		</div>
    

		<div className="flex gap-2  ">
				{
			showEdit&&	<button className="bg-[#FBBF9B] px-3 py-1 rounded-md text-white cursor-pointer flex flex-col justify-center items-center"  
					onClick={() => handleEdit(todos.id)}
        style={{
      backgroundColor: todos.color.tag,
      color: todos.color.text

    }}>
			<FaEdit/>
				{editingId === todos.id ? "Editing..." : "Edit"}
			</button>
		}
      
		
			<button className="bg-[#FBBF9B] px-3 py-1 rounded-md text-white cursor-pointer flex flex-col justify-center items-center"
			onClick={()=>deleteTodo(todos.id)}
        style={{
      backgroundColor: todos.color.tag,
      color: todos.color.text
    }}
		>
			<FaTrash/>
				Delete
			</button>
    </div>
      
		</div>
	);
};
//flex  items-center   p-2 rounded-lg w-full border  px-4 py-2 gap-2 h-15 sm:text-[16px] text-[13px]
export default Todo;
