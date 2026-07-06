import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

const DashboardSidebar = ({ completedTodos, todos ,activeTodos}) => {
	const [selected, setSelected] = useState();
	const percent = todos === 0 ? 0 : Math.round((completedTodos / todos) * 100);
	const totalBars = 10;
	const filledBars =
		todos === 0 ? 0 : Math.round((completedTodos / todos) * totalBars);

	let heading;
	let message;
	if (activeTodos === 0) {
		heading = "✨All Clear✨";
		message = "Nothing on your plate. Enjoy the peace while it lasts.🎊";
	}
  else if(activeTodos===1){
    heading="🚀Final Stretch🚀"
    message="The finish line is literally one task away.🔥"
  } else if (activeTodos <= 4) {
		heading = "✨Plot Twist✨";
		message = "Just a few checkmarks away from victory🌱";
	} else if (activeTodos <= 7) {
		heading = "😏Just Saying😏";
		message = "Your tasks are becoming vintage👀";
	} else {
		heading = "💀Daily Dose💀";
		message = `Currently ignoring ${activeTodos} tasks with great success.👀`;
	}

	return (
		<div className="sticky top-3 hidden md-lg:flex flex-col h-screen  gap-4 w-90 p-6 pb-4 text-white justify-between">
			<div className="flex-1   bg-[#141719]  w-full rounded-2xl p-6 ">
				<div className=" flex flex-col justify-between  gap-3 h-full">
					<p className="font-bold text-[17px] ">Today's Progress</p>
					<div className="flex gap-2 items-center">
						<div class="flex flex-col">
							<p className="font-bold">
								{completedTodos === 0 ? 0 : completedTodos}/
								{todos === 0 ? 0 : todos}
							</p>
							<p className="text-[14px]">tasks completed</p>
						</div>
						<div>
							<div className="w-20 h-20 ml-7">
								<CircularProgressbar
									value={percent}
									text={`${percent}%`}
									styles={buildStyles({
										pathColor: "#F4B183",
										trailColor: "#2E323A",
										textColor: "#ffffff",
										strokeLinecap: "round",
									})}
								/>
							</div>
						</div>
					</div>

					<div className="flex gap-1.5 mt-2">
						{[...Array(totalBars)].map((_, index) => (
							<div
								key={index}
								className={`h-5 flex-1 rounded-full transition-colors ${
									index < filledBars ? "bg-[#F4B183]" : "bg-[#2E323A]"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
			<div className=" bg-[#141719]  w-full p-4 pt-5 rounded-2xl   ">
				<DayPicker
					mode="single"
					selected={selected}
					onSelect={setSelected}
					classNames={{
						caption: "flex  items-center justify-between mb-2 ",

						month_caption: "text-white text-sm font-semibold w-full",
						month_grid: "w-full table-fixed ",
						nav: "flex items-center gap-1 ",

						button_previous:
							"h-0.5 w-7 p-0 flex items-center justify-center rounded-full hover:bg-[#2E323A] cursor-pointer",

						button_next:
							"h-0.5 w-7 p-0 flex items-center justify-center rounded-full hover:bg-[#2E323A] cursor-pointer",

						weekdays: "text-[#8B93A7] ",
						weekday: "text-[11px] font-medium ",

						week: "h-4 ",

						day: "p-0 ",

						day_button:
							"h-6  w-6 rounded-full text-sm text-white hover:bg-[#2E323A] transition-colors cursor-pointer",

						selected: "bg-[#F4B183] text-[#141719]  rounded-[20%] ",
						today: "border border-[#F4B183] ",
					}}
				/>
			</div>
			<div className=" flex-1 bg-linear-to-r from-purple-500 to-pink-400 hover:from-purple-500 hover:to-pink-500   w-full rounded-2xl p-5 cursor-pointer flex flex-col   justify-center mb-2">
				<p className="font-black ">{heading}</p>
				<p>" {message}"</p>
			</div>
		</div>
	);
};

export default DashboardSidebar;
