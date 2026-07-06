import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AllPages from "./pages/AllPages.jsx";
import ActivePages from "./pages/ActivePages.jsx";
import CompletedPages from "./pages/CompletedPages.jsx";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/Planora/",
		Component: App,
		children: [
			{
				index:true,
				Component: AllPages,
			},
			{
				path: "/Planora/active",
				Component: ActivePages,
			},
			{
				path: "/Planora/completed",
				Component: CompletedPages,
			},
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>,
);
