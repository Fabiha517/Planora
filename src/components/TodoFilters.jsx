	import { FiList, FiClock, FiCheckCircle } from "react-icons/fi";
	import UpgradeMascot from '../Images/UpgradeMascot.png';
	import profile from '../Images/pfp.png';

	const TodoFilters = ({ setFilter, filter }) => {
		return (
			<>
				{/* Desktop Left Sidebar */}
				<div className="hidden md:block w-72  border-r border-[#1F2937] bg-[#0B0E12] p-6 max-h-screen  sticky top-0 ">
					
					<div className="flex flex-col justify-between h-full">
					
						<div className="flex flex-col gap-1  p-4 mb-auto">
							<button 
								className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-white text-lg font-medium transition-all ${filter === "all" ? "all" : ""}`}
								onClick={() => setFilter("all")}
							>
								<FiList  /> All Tasks
							</button>

							<button 
								className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-lg text-white font-medium transition-all active`}
								onClick={() => setFilter("active")}
							>
								<FiClock  /> Active
							</button>

							<button 
								className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-white 	 text-lg font-medium transition-all completed`}
								onClick={() => setFilter("completed")}
							>
								<FiCheckCircle  /> Completed
							</button>
						</div>
	<div class="flex flex-col justify-between ">
						{/* Upgrade Section */}
						<div className="bg-[#141719] rounded-3xl p-4 border border-[#374151]">
							<div className="flex flex-col items-center text-center">
								<img 
									src={UpgradeMascot} 
									alt="Upgrade Mascot" 
									className=" object-contain h-20	"
								/>
								<h3 className="text-white text-[20px] font-semibold mb-2">Upgrade to Pro</h3>
								<p className="text-[#9CA3AF] text-sm mb-3">Unlock unlimited tasks, custom themes &amp; more.</p>
								
								<button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 rounded-2xl text-white font-semibold transition-all h-10 mb-2 cursor-pointer		">
									Upgrade Now
								</button>
							</div>
						</div>
						<div class="mt-3 	flex  items-center gap-2 ">
	<img src={profile} alt="Profile" className="w-13 h-13 mt-6 " />
	<div className="text-white text-[14px] mt-2 text-left">
		<p className="font-bold">Fabiha</p>
		<p>fabiha517@gmail.com</p>
	</div>
						</div>
					</div>
				</div>
	</div>
				{/* Mobile Bottom Navigation - Unchanged */}
				<div className="md:hidden flex w-full justify-evenly fixed bottom-0 bg-[#141719] h-18 rounded-t-3xl text-[17px] z-10 border-t border-[#1F2937]">
					<button className={`TodoFilterButton allf allh flex-1 ${filter === "all" ? "all" : ""}`} onClick={() => setFilter("all")}>
						<FiList className="h-9 w-5" /> All
					</button>
					<button className="TodoFilterButton active flex-1" onClick={() => setFilter("active")}>
						<FiClock className="h-8 w-5" /> Active
					</button>
					<button className="TodoFilterButton completed flex-1" onClick={() => setFilter("completed")}>
						<FiCheckCircle className="h-8 w-5" /> Completed
					</button>
				</div>
			</>
		);
	};

	export default TodoFilters;