import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validace
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Vyplňte prosím všechna povinná pole.' },
        { status: 400 }
      );
    }

    // Jednoduchá validace emailu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Zadejte prosím platnou e-mailovou adresu.' },
        { status: 400 }
      );
    }

    // Zde by byla integrace s databází (Prisma) nebo emailovou službou
    // Pro demonstraci pouze logujeme
    console.log('Nová zpráva z kontaktního formuláře:', {
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString(),
    });

    // TODO: Odeslání emailu pomocí Resend, Nodemailer, nebo jiné služby
    // TODO: Uložení do databáze pomocí Prisma
    
    // Simulace zpracování
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { success: true, message: 'Zpráva byla úspěšně odeslána.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chyba při zpracování kontaktního formuláře:', error);
    return NextResponse.json(
      { error: 'Nastala chyba při odesílání zprávy. Zkuste to prosím znovu.' },
      { status: 500 }
    );
  }
}
