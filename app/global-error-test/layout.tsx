/**
 * Global Error Test Layout
 * Bu layout global-error.tsx'ni test qilish uchun error throw qiladi
 */

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function GlobalErrorTestLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ searchParams?: SearchParams }>;
}) {
  // Search params olish
  const resolvedParams = await params;

  // IMPORTANT: Layout'da searchParams to'g'ridan-to'g'ri keladi
  // Lekin biz buni test uchun query string'dan olishimiz kerak
  // Shuning uchun faqat error throw qilamiz

  // Bu global error'ni trigger qiladi
  throw new Error('Global Error Test: Layout-level error yuz berdi!');

  return <>{children}</>;
}
