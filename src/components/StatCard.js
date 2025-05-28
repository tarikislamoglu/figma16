export default function StatCard({
  title,
  value,
  status,
  max,
  color = "green-500",
  symbol,
}) {
  const percent = (value / max) * 100;
  return (
    <div className="flex flex-col justify-center items-center rounded bg-white space-y-3 ">
      <h3 className="text-sm font-semibold text-gray-500 ">{title}</h3>

      <div className="flex items-center space-x-3 h-2/3 justify-center w-full">
        <div className="h-full bg-[#B6DFFF69]  rounded-full w-8 flex items-end">
          <div
            className=" w-8 rounded-full bg-[#008CF869] "
            style={{ height: `${percent}%` }}
          ></div>
        </div>
        <div className="w-1/2 ">
          <div className="m-2 ">
            <p className="text-4xl font-bold text-[#2396EF]">
              {value}
              {symbol}
            </p>
            <span
              className={`text-xs rounded text-${color} border-2 border-${color}`}
            >
              {status}
            </span>
          </div>
          <div className="bg-gray-200 rounded p-3 m-2 text-xs">
            <p>1H</p>
            <p className="rounded-lg bg-white ">1D</p>
            <p>1W</p>
            <p>1M</p>
          </div>
        </div>
      </div>
    </div>
  );
}
