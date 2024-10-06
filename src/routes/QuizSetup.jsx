import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const QuizSetup = () => {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("9");
	const [difficulty, setDifficulty] = useState("easy");
	const [amount, setAmount] = useState(10);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = () => {
		dispatch(setUpQuiz({ name, category, difficulty, amount }));
		navigate("/quiz");
	};
	return (
		<div>
			<h1>Quiz Setup</h1>
			<label>Name:</label>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label>Category:</label>
			<select
				type="text"
				value={category}
				onChange={(e) => setCategory(e.target.value)}>
				<option value="9">General Knowledge</option>
				<option value="21">Sports</option>
				<option value="22">Geography</option>
				<option value="18">Science:Computer</option>
			</select>
			<label>Difficulty Level:</label>
			<select
				type="text"
				value={difficulty}
				onChange={(e) => setDifficulty(e.target.value)}>
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="hard">Hard</option>
			</select>
			<label> Number of Questions</label>
			<input
				type="number"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};
