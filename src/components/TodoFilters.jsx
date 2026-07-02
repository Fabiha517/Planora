import { FiList, FiClock, FiCheckCircle } from "react-icons/fi";

const TodoFilters = ({setFilter,filter}) => {
	return (
		<div className="flex w-full justify-evenly  fixed bottom-0 bg-[#141719] z-10 h-18 rounded-t-3xl text-[11px] ">
			<button className={` TodoFilterButton aalf allh ${filter === "all" ? "all" : ""} ` }
			onClick={()=>setFilter("all")}>
				<FiList className="h-9 w-5 "/> All
			</button>
			<button className=" TodoFilterButton active"
			 onClick={()=>setFilter("active")}>
				<FiClock className="h-8 w-5 " />
				Active
			</button>

			<button className="TodoFilterButton completed" 
			onClick={()=>setFilter("completed")}>
				<FiCheckCircle className="h-8 w-5 "   />
				Completed
			</button>
		</div>
	);
};

export default TodoFilters;
