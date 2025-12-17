import { Link } from 'react-router-dom';
import VerificationRequestItem from './VerificationRequestItem';
import { ArrowRight } from 'lucide-react';

const verificationData = [
  { id: 1, name: 'John Doe', role: 'Organizer', socialLink: 'instagram.com', status: 'Pending' },
  { id: 2, name: 'John Doe', role: 'Creator', socialLink: 'instagram.com', status: 'Pending' },
  { id: 3, name: 'John Doe', role: 'Partner', socialLink: 'instagram.com', status: 'Pending' },
];

const VerificationRequestList = () => {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg shadow-[#00000040]">
      <div>
        <div className="flex justify-between items-center my-7">
          <div>
            <h2 className="text-2xl font-bold text-[#262626]">Verification Request</h2>
            <p className='text-[#262626] text-base mt-1.25'>Review &approve organizer verification</p>
          </div>
          <Link to="#" className="bg-gray-100 p-2 rounded-md font-medium flex items-center text-sm text-[#262626] hover:text-[#413f3f]">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {verificationData.map((item) => (
          <VerificationRequestItem
            key={item?.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default VerificationRequestList;