import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {
	const postData = {
		title: "",
		author: "",
		publishedDate: new Date(),
		shortDescription: "",
		content: "",
		category: "Sport",
	};
	const dispatch = useDispatch();
	const handleAddPost = (e, postData) => {
		dispatch(addPost(postData));
	};

	return (
		<PostForm
			actionText="Add Post"
			action={handleAddPost}
			postData={postData}
		></PostForm>
	);
};
export default AddPostForm;
