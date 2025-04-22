export default async (request, context) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId") || "1"; // default to 1

  const apiUrl = `https://dwharuba.erp4.io/version-test/api/1.1/wf/healthcard?where${userId}`;

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
