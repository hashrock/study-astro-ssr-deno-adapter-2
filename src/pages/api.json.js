export async function get({ params }) {
  return new Response(JSON.stringify({
    message: "Hello from Astro!"
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}