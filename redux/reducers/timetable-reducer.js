// Create test reducer for add redux in project

export const initialState = {
    loading: false,
    data: false,
    userPins: [],
    errorMessage: null,
    bookmarks: [],
    searchTimetable: [],
    lessonTimetable: [],
    text: ''
};

export const TimetableReducer = (state = initialState, action) => {
    const { type, payload, text } = action;
    switch (type) {
        case "FETCH_API_START":
            return { ...state, loading: true };
        case "FETCH_API_SUCCESS":
            return { ...state, loading: false, data: payload };
        case "FETCH_API_FAILURE":
            return { ...state, loading: false, data: "Not found Data" }
        default:
            return state;
    }
}
