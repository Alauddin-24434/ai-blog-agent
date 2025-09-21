export default function AnalyticsDashboard({ data }: { data: any }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold mb-2">Analytics</h2>
      <p>Visitors: {data.visitors}</p>
      <p>Top Blogs: {data.topBlogs.join(", ")}</p>
    </div>
  );
}
