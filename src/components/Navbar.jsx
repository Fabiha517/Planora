import { FiBell } from "react-icons/fi";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-10 h-15 bg-[#0B0E12]  p-4">
			<div className="flex items-center justify-between   ">
				
		<div className="logo flex gap-2">
      		<div className="relative w-10 h-8 rounded-xl bg-gradient-to-br from-pink-300 via-purple-400 to-green-300 p-[2px]">
					<div className="w-full h-full   rounded-xl bg-black flex flex-col justify-center gap-1 px-2">
						<span className="w-5 h-1 rounded-full bg-pink-300"></span>
						<span className="w-5 h-1 rounded-full bg-purple-400"></span>
						<span className="w-5 h-1 rounded-full bg-green-300"></span>
					</div>

					<span className="absolute -top-2 -right-1 text-orange-200 text-xl">
						✦
					</span>
				</div>

				
				<h1 className="text-2xl  font-bold bg-gradient-to-r  from-orange-200  via-purple-400  to-green-300 text-transparent bg-clip-text">Planora</h1>
    </div>
  
      <FiBell  stroke="white" strokeWidth={2} className="h-8 w-5" />

			</div>
		</nav>
	);
};

export default Navbar;
