import { NextRequest, NextResponse } from 'next/server';

/**
 * Test API endpoint - turli xil error'larni simulate qilish uchun
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  // Artificial delay (real API'ni simulate qilish)
  await new Promise(resolve => setTimeout(resolve, 500));

  switch (type) {
    case 'success':
      return NextResponse.json({
        success: true,
        message: 'Muvaffaqiyatli!',
        data: { timestamp: new Date().toISOString() }
      });

    case '500':
      return NextResponse.json(
        { success: false, error: 'Internal Server Error' },
        { status: 500 }
      );

    case '404':
      return NextResponse.json(
        { success: false, error: 'Not Found' },
        { status: 404 }
      );

    case '401':
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );

    default:
      return NextResponse.json({
        success: true,
        message: 'Default response'
      });
  }
}
