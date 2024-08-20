const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div>
      <h1>Posts page</h1>
      <p>this page is gonna show all the posts</p>
      {data.map((post, i) => (
        <li key={i}>{post?.title}</li>

      ))}
    </div>
  );
};
export default page;
