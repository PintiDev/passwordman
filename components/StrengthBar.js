import React, { useEffect, useState } from "react";
const StrengthBar = ({ value }) => {
  const [bars, setBars] = useState(0);
  useEffect(() => {
    if (value == "veryWeak") {
      setBars(1);
    } else if (value == "weak") {
      setBars(2);
    } else if (value == "medium") {
      setBars(3);
    } else if (value == "strong") {
      setBars(4);
    } else if (value == "veryStrong") {
      setBars(5);
    } else if (value == "perfect") {
      setBars(6);
    }
  }, [value]);
  return (
    <div className="flex items-center flex-row-reverse gap-x-4  w-full sm:w-auto justify-between ">
      <div className="flex items-center gap-x-3 h-12  w-28   ">
        {Array.from(Array(bars)).map((item, indeks) => (
          <li
            key={indeks}
            className="h-full w-[6px] bg-green-500 list-none rounded"
          ></li>
        ))}
      </div>
      <p className="text-gray-300 uppercase font-semibold">{value}</p>
    </div>
  );
};

export default StrengthBar;
