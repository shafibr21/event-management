import { ArrowRight } from 'lucide-react';

const organizerData = [
  { name: 'TechCrop', events: 48, revenue: '$1000' },
  { name: 'John Deo', events: 40, revenue: '$500' },
  { name: 'Innovate Hub', events: 20, revenue: '$300' },
  { name: 'Innovate Hub', events: 20, revenue: '$300' },
];

const TopOrganizersTable = () => {
  return (
    <div className="bg-[#FFFFFF] py-7 px-12.5 rounded-[10px] shadow-lg h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-[#000000]">Top Organizer's</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left text-base bg-[#F0F9FF] font-medium text-[#262626]">
              <th className="py-4 pr-3">Organizer</th>
              <th className="py-4 px-3">Events</th>
              <th className="py-4 pl-3 text-right">Revenue</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {organizerData.map((organizer, index) => (
              <tr key={index} className="hover:bg-gray-50 text-sm">
                <td className="py-3 pr-3 whitespace-nowrap text-sm font-medium text-[#262626]">
                  {organizer.name}
                </td>
                <td className="py-3 px-3 whitespace-nowrap text-sm text-[#262626]">
                  {organizer.events}
                </td>
                <td className="py-3 pl-3 whitespace-nowrap text-sm text-[#262626] text-right">
                  {organizer.revenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopOrganizersTable;