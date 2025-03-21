import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import { getPostById } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

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
