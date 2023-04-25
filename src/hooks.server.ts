export async function handle({ event, resolve }) {
  const response = await resolve(event)

  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' unsafe-inline; style-src-elem 'self' fonts.googleapis.com; font-src fonts.gstatic.com",
  )
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  return response
}
