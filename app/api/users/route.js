export async function GET(request) {
  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "jamie" },
    { id: 3, name: "jane" },
  ];
  return new Response(JSON.stringify(users));
}
