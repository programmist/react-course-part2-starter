import usePosts from "../hooks/usePosts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.body}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
