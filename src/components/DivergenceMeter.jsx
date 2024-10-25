import { useEffect, useState } from "react";

const DivergenceMeter = () => {
  const [divergence, setDivergence] = useState("1.048596");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomDivergence = (Math.random() * (1.2 - 0.9) + 0.9).toFixed(6);
      setDivergence(randomDivergence);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex flex-col items-center mt-8  0 p-6 rounded-lg shadow-lg border border-green-500 max-w-xs mx-auto justify-center'>
      <h3 className='text-2xl mb-4 text-green-500 font-mono tracking-wide'>
        Divergence Meter
      </h3>
      <div
        className='text-5xl font-mono mb-4 text-green-500 neon-text shadow-lg tracking-widest'
        data-text={divergence}
      >
        {divergence}
      </div>
    </div>
  );
};

export default DivergenceMeter;
