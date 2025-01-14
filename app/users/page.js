const page = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();

  // console.log(data)
  return (
    <div>
      <h1>Users page</h1>
      <p>this page shows all the users registered in this website</p>

      <br />
      {data.map((user) => (
        <div key={user.id}>{user.name}: {user.id} </div>
      ))}
    </div>
  );
};
export default page;
