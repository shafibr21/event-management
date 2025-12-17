const MetricsCard = ({ bgColor, title, icon, value, change, }) => {
  return (
    <div className={`${bgColor} p-6 rounded-xl shadow-lg shadow-[#00000040] transition duration-300`}>
      <div className="flex justify-between items-start">
        <h3 className="text-[#737373] font-bold text-lg">{title}</h3>
        <div className={`flex justify-between items-center`}>
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-baseline mt-2">
        <p className="text-2xl lg:text-3xl font-bold text-[#262626]">{value}</p>
      </div>
      <div className="flex justify-end items-baseline">
        <p className={`ml-3 text-lg text-[#0284C7] font-semibold px-2 py-0.5 rounded-full`}>{change}</p>
      </div>
    </div>
  );
};

export default MetricsCard;