const UserActivityChart = () => {
  // In a real application, you would use Recharts/Chart.js here.
  // The bar styling in the image is a custom dark blue (#0A1930).

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-96">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Activity</h2>
      <div className="h-full w-full">
        {/* Placeholder for Chart */}
        <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Integrate a chart library (e.g., Recharts) here.</p>
        </div>
      </div>
    </div>
  );
};

export default UserActivityChart;