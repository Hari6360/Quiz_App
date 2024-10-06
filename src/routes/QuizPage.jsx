import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuizSetup } from "./QuizSetup";
import { useNavigate } from "react-router-dom";

export const QuizPage = () => {
	const { quizSetup, questions, currentQues } = useSelector(
		(state) => state.quiz
	);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [timer, setTimer] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (questions.length == 0) {
			dispatch(
				fetchQues(quizSetup.category, quizSetup.difficulty, quizSetup.amount)
			);
		}
	}, [dispatch, QuizSetup]);
	useEffect(() => {
		if (questions.length > 0) {
			const difficulty = quizSetup.difficulty;
			const initTime =
				difficulty === "easy" ? 20 : difficulty == "medium" ? 15 : 30;
		}
		setTimer(initTime);
		const timing = setInterval(() => {
			setTimer((prev) => {
				if (prev === 0) {
					handleNextQues();
					return initTime;
				}
				return prev - 1;
			});
		}, 1000);
		return () => clearTimeout(timing);
	}, []);

	const handleNextQues = () => {
		if (questions[currentQues].correct_answer == selectedAnswer) {
			dispatch(submitQuiz(1));
		} else {
			dispatch(submitQuiz(0));
		}

		if (currentQues < questions.length - 1) {
			dispatch(setCurrentQues(currentQues + 1));
		} else {
			navigate("/leaderboard");
		}
		setSelectedAnswer(null);
	};

	if (question.length === 0) return <div>...Loading Please Wait</div>;
	return (
		<div>
			<h1>{`Question ${currentQues + 1} of ${questions.length}`}</h1>
			<h2>{question.question}</h2>
			<div>
				{question.incorrect_answers
					.concat(questions.correct_answer)
					.sort()
					.map((answer, index) => {
						return (
							<div key={index}>
								<input
									type="radio"
									name="answer"
									value={answer}
									checked={selectedAnswer === answer}
									onChange={(e) => setSelectedAnswer(e.target.value)}
								/>
								<label>{answer}</label>
							</div>
						);
					})}
			</div>
			<p>
				<b>Time left :</b>
				{timer}
			</p>
			<button onClick={handleNextQues}>
				{currentQues === questions.length - 1 ? "submit" : "Next"}
			</button>
		</div>
	);
};
