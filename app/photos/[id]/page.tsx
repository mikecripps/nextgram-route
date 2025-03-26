import Link from 'next/link';

export const dynamicParams = false;

export function generateStaticParams() {
  let slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="card">
      {id}
      <div>
        <div>
          <Link href="/photos/1">Photo 1</Link>
        </div>
        <div>
          <Link href="/photos/2">Photo 2</Link>
        </div>
        <div>
          <Link href="/photos/3">Photo 3</Link>
        </div>
      </div>
    </div>
  );
}
