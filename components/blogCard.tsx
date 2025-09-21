export default function BlogCard({ title, excerpt }: { title: string; excerpt: string }) {
  return (
    <div className="border rounded p-4 bg-white shadow hover:shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{excerpt}</p>
    </div>
  );
}
