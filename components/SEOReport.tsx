export default function SEOReport({ report }: { report: string[] }) {
  return (
    <div className="mt-4 border p-4 bg-white rounded shadow">
      <h2 className="font-bold mb-2">SEO Report</h2>
      <ul className="list-disc pl-6 space-y-1">
        {report.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
