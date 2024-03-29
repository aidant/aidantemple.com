export async function handle({ event, resolve }) {
  const response = await resolve(event)

  if (!response.headers.has('Content-Security-Policy')) {
    response.headers.set('Content-Security-Policy', "default-src 'self'")
  }
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  return response
}
