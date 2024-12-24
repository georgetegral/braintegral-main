import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_SANDBOX || '', {
  apiVersion: '2024-06-20',
});

function cleanUrl(url: string): string {
  const index = url.indexOf('?');
  if (index !== -1) {
    return url.substring(0, index);
  }
  return url;
}

export async function POST(req: Request) {
  try {
    // Get the JSON Data
    const body = await req.json(); // Parse the incoming JSON body
    const { priceId, quantity } = body;
    console.log(body);
    console.log(priceId);
    console.log(process.env.STRIPE_SECRET_KEY_SANDBOX);

    // Clean the referer in case of multiple cancels
    const cleanReferer = cleanUrl(req.headers.get('referer') || '');

    console.log(req);

    // Validate productId and quantity
    if (!priceId || !quantity) {
      return NextResponse.json(
        { error: 'Invalid product ID or quantity' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${cleanReferer}?success=false`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Stripe Error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
