export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)

    // API routes will live here
    if (url.pathname.startsWith('/api')) {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'content-type': 'application/json' }
      })
    }

    return new Response('Not found', { status: 404 })
  }
}
