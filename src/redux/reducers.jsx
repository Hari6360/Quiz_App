const initState = {
	quizSetup: {},
	questions: [],
	currentIndex: 0,
	score: 0,
	error: null,
	leaderboard: [],
	// JSON.parse(localStorage.getItem("leaderboard")) ||
};

export const quizReducer = (state = initState, action) => {
	switch (action.type) {
		case SETUP_QUIZ:
			return {
				...state,
				quizSetup: action.payload,
			};
		case FETCH_QUES_SUCCESS:
			return {
				...state,
				questions: action.payload,
			};
		case FETCH_QUES_FAIL:
			return {
				...state,
				error: action.payload,
			};
		case FETCH_CURRENT_QUES:
			return {
				...state,
				currentIndex: action.payload,
			};
		case SUBMIT_QUIZ:
			const newLeaderboard = [
				...state.leaderboard,
				{
					name: state.quizSetup.name,
					score: action.payload,
				},
			].sort((a, b) => b.score - a.score);
			// localStorage.setItem("leaderboard", JSON.stringify(newLeaderboard));
			return {
				...state,
				leaderboard: newLeaderboard,
			};

		default:
			return state;
	}
};
