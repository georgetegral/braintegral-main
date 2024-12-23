import { geolocation } from '@vercel/functions';

export function GET(request: Request) {
  const details = geolocation(request);
  //console.log(`Geolocation details:`, details);
  return new Response(JSON.stringify(details), {
    headers: { 'content-type': 'application/json' },
  });
}
