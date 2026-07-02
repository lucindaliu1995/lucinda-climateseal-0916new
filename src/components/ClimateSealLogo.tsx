import React from 'react';
import Image from 'next/image';

const ClimateSealLogo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/climate-seal-logo-white.png"
        alt="Climate Seal"
        width={1200}
        height={478}
        className="h-auto w-[150px] sm:w-[174px] md:w-[198px]"
        priority
        unoptimized
      />
    </div>
  );
};

export default ClimateSealLogo;
