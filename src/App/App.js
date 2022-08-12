import { createContext, useState } from "react";
import "./App.css";
import Pricing from "./Pricing/Pricing";

export const ThemeContext = createContext(null);

function App() {
	const [theme, setTheme] = useState("light");
	const [mode, setMode] = useState("Dark Mode");

	const toggleTheme = () => {
		setTheme((current) => (current === "light" ? "dark" : "light"));
		setMode((current) =>
			current === "Dark Mode" ? "Light Mode" : "Dark Mode",
		);
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className="app-container" id={theme}>
				<div className="circles">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="200"
						height="200"
					>
						<g fill="none" fill-rule="evenodd" stroke="#CFD8EF">
							<circle
								className="circle1"
								cx="63"
								cy="82"
								r="62.5"
							/>
							<circle
								className="circle2"
								cx="105"
								cy="41"
								r="40.5"
							/>
						</g>
					</svg>
				</div>
				<div className="text">
					<div className="main-text">
						Simple, traffic-based pricing
					</div>
					<div className="sub-text">
						Sign-up for our 30-day trial. No credit card required.
					</div>
				</div>
				<Pricing />
				<div className="theme-toggle" onClick={toggleTheme}>
					{mode}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z"
							fill="#fff"
						/>
					</svg>
				</div>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
