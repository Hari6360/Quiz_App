import axios from "axios";

export const SETUP_QUIZ = "SETUP_QUIZ";
export const FETCH_QUES_SUCCESS = "FETCH_QUES_SUCCESS";
export const FETCH_QUES_FAIL = "FETCH_QUES_FAIL";
export const FETCH_CURRENT_QUES = "FETCH_CURRENT_QUES";
export const SUBMIT_QUIZ = "SUBMIT_QUIZ";

export const setUpQuiz = (quizData) => ({
	type: SETUP_QUIZ,
	payload: quizData,
});

export const fetchQues = (category, difficulty, amount) => async (dispatch) => {
	try {
		const res = await axios.get(
			`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
		);
		dispatch({
			type: FETCH_QUES_SUCCESS,
			payload: res.data.results,
		});
	} catch (error) {
		dispatch({
			type: FETCH_QUES_FAIL,
			payload: error,
		});
	}
};

export const fetchCurrentques = (index) => ({
	type: FETCH_CURRENT_QUES,
	payload: index,
});
export const submitQuiz = (score) => ({
	type: SUBMIT_QUIZ,
	payload: score,
});

