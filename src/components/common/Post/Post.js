import { Button, Container, Card } from "react-bootstrap";
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";

const Post = () => {
  const posts = useSelector((state) => getAllPosts(state));

  return (
      <div className="row mt-4 mb-4">
        {posts.map((post) => (
          <div key={post.id} className="col-12 col-md-4">
            <Card className="rounded">
              <Card.Body>
                <h5 className="articleTitle">{post.title}</h5>
                <p className="author">
                  <span className="bold">Author: </span>
                  {post.author}
                </p>
                <p className="publishDate">
                  <span className="bold">Published: </span>
                  {post.publishedDate}
                </p>
                <p className="descryption">{post.shortDescription}</p>
                <Button>Read more</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
  );
};

export default Post;
