import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {
	const postData = {
		title: "",
		author: "",
		publishedDate: "2022-02-02",
		shortDescription: "",
		content: "",
	};
	const dispatch = useDispatch();
	const handleAddPost = (e, postData) => {
		e.preventDefault();
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
