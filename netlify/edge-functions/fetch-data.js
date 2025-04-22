export default async (request, context) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId") || "1"; // default to 1

  const apiUrl = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`, // secure token
      'Accept': 'application/json'
    }
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
};
