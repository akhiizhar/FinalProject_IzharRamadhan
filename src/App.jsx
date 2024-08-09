import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Sewa from "./pages/Sewa";
import Detail from "./pages/Detail";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Sewa" element={<Sewa />} />
				<Route path="/Detail/:id" element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;
