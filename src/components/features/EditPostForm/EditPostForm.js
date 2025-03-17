import PostForm from "../PostForm/PostForm";
import { useDispatch } from "react-redux";
import { editPost } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const EditPostForm = () => {
	const { id } = useParams();
	const post = useSelector((state) => getPostById(state, id));
	const dispatch = useDispatch();
	if (!post) return <Navigate to="/" />;
	const postData = {
		title: post.title,
		author: post.author,
		publishedDate: post.publishedDate,
		shortDescription: post.shortDescription,
		content: post.content,
	};

	const handleEditPost = (e, postData) => {
		e.preventDefault();
		dispatch(editPost(postData, post.id));
	};

	return (
		<PostForm
			actionText="Edit Post"
			action={handleEditPost}
			postData={postData}
		></PostForm>
	);
};

export default EditPostForm;
