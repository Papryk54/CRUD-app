import shortid from "shortid";

//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = (state, postId) =>
	state.posts.find((post) => post.id === postId);
export const getPostByCategory = (state, pickedCategory) => {
	return state.posts.filter((post) => post.category === pickedCategory);
};

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const REMOVE_POST = createActionName("REMOVE_POST");
const ADD_POST = createActionName("ADD_POST");
const EDIT_POST = createActionName("EDIT_POST");

// action creators
export const removePost = (postId) => ({
	type: REMOVE_POST,
	payload: postId,
});
export const addPost = (payload) => ({ type: ADD_POST, payload });

export const editPost = (post, postId) => ({
	type: EDIT_POST,
	payload: { post, postId },
});

// reducer
const postsReducer = (statePart = [], action) => {
	switch (action.type) {
		case REMOVE_POST:
			return statePart.filter((post) => post.id !== action.payload);
		case ADD_POST:
			return [...statePart, { ...action.payload, id: shortid() }];
		case EDIT_POST:
			return statePart.map((post) =>
				post.id === action.payload.postId
					? { ...post, ...action.payload.post }
					: post
			);

		default:
			return statePart;
	}
};

export default postsReducer;
