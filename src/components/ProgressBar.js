export default function ProgressBar({ label, value, max, status, symbol }) {
  const percent = (value / max) * 100;

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold mb-1">{label}</h3>

        <div className="bg-gray-200 rounded px-1 py-0.5 text-xs flex space-x-2">
          <p>1H</p>
          <p className="rounded bg-white ">1D</p>
          <p>1W</p>
          <p>1M</p>
        </div>
      </div>

      <div
        className={`w-full rounded-full h-4 ${
          symbol
            ? " bg-gradient-to-r from-[#A8EFFF] via-[#0093FF] to-[#FF0404] "
            : "bg-[#2396EF59]"
        }`}
      >
        <div
          className={` h-4 rounded-full ${
            symbol ? "bg-[#fff] border-1 border-[#2990F1]" : "bg-[#0386FF]"
          }`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="font-bold text-2xl mt-1 text-[#2396EF] ">
        {value}
        {symbol}
        <span
          className={`text-xs border-2 rounded ml-2 ${
            status === "Good"
              ? "text-green-500 border-green-500"
              : "text-yellow-500 border-yellow-500"
          }`}
        >
          {status}
        </span>
      </p>
    </div>
  );
}
