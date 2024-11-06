import React from 'react';

interface ZodiacCardProps {
  sign: string;
  element: string;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ sign, element }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
      <h4 className="text-lg font-semibold text-white">{sign}</h4>
      <p className="text-sm text-purple-200">{element}</p>
    </div>
  );
};

export default ZodiacCard;