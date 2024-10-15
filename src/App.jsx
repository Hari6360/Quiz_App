import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QuizSetup } from "./routes/QuizSetup";
import { QuizPage } from "./routes/QuizPage";
import { Leaderboard } from "./routes/Leaderboard";
import store from "./redux/store";

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<QuizSetup />} />
					<Route path="/quiz" element={<QuizPage />} />
					<Route path="/leaderboard" element={<Leaderboard />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};
