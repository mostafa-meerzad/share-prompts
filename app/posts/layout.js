const layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/posts/post1">link 1</a>
          </li>
          <li>
            <a href="/posts/post2">link 2</a>
          </li>
          <li>
            <a href="/posts/post3">link 3</a>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};
export default layout;
