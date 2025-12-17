import downloadIcon from '../../assets/images/download-icon.svg';
import tikMarkIcon from '../../assets/images/tikmark.svg';
import rejectedIcon from '../../assets/images/rejected-icon.svg';

const VerificationRequestItem = ({ name, role, socialLink, status }) => {
  const statusClasses = {
    Pending: 'bg-[#CCF1DF] text-[#34C759]',
    Approved: 'bg-[#FFFFFF] text-[#FF383C]',
  };

  const roleClasses = {
    Creator: 'bg-pink-100 text-pink-500',
    Partner: 'bg-yellow-100 text-yellow-600',
    Organizer: 'bg-blue-100 text-blue-500',
  };

  const isPending = status === 'Pending';

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-10 py-4.5 rounded-[10px] shadow-sm shadow-[#00000040] border-l-4 border-[#1e7db4]"
    >
      <div>
        <div className='flex items-center gap-4 space-y-2'>
          <p className="font-semibold text-xl text-[#262626]">{name}</p>
          <div className="flex items-center my-1 space-x-2">
            <span className={`border-[#2DA94F] text-xs font-semibold px-2 py-0.5 rounded-full ${roleClasses[role]}`}>
              {role}
            </span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusClasses[status]}`}>
              {status}
            </span>
          </div>
        </div>
        <p className="text-sm text-[#737373]"> Social Link : <span className='text-blue-600 hover:underline'>{socialLink}</span></p>
        <div className="text-xs text-[#737373] mt-1 space-y-1">
          <div className='flex items-center gap-1'>
            <img className='w-3.5 h-3.5' src={downloadIcon} alt="DownloadIcon" />
            <p className="mr-3">Download</p>
          </div>
          <p>Submitted: 02-02-2025</p>
        </div>
      </div>
      {/* status button */}
      <div className="flex space-x-2">
        {isPending && (
          <>
            <button className="bg-[#34C759] text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition-colors flex items-center gap-1">
              <img className='w-6 h-6' src={tikMarkIcon} alt="approved-Icon" />
              Approve
            </button>
            <button className="bg-white text-[#FF383C] border border-[#FF383C] px-4 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1">
              <img className='w-4 h-4' src={rejectedIcon} alt="rejected-icon" />
              Reject
            </button>
          </>
        )}
        <button className="text-blue-600 border border-blue-600 px-4 py-2 text-sm rounded-lg hover:bg-blue-50 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default VerificationRequestItem;