// src/components/Card.tsx
import React from 'react';

interface CardProps {
  suit: string; // "hearts", "diamonds", "clubs", "spades"
  value: string; // "A", "2", "3", ..., "K"
}

const suitSymbols: Record<string, string> = {
  hearts: '♥',
  diamonds: '♦',
  clubs: '♣',
  spades: '♠',
};

const Card: React.FC<CardProps> = ({ suit, value }) => {
  const suitColor = suit === 'hearts' || suit === 'diamonds' ? 'text-red-500' : 'text-black';

  return (
    <div className="relative w-24 h-36 border-2 border-gray-500 rounded-lg bg-white shadow-lg flex flex-col justify-between p-2">
      {/* Top-left corner */}
      <div className={`absolute top-2 left-2 ${suitColor}`}>
        <p className="text-xs font-bold">{value}</p>
        <p className="text-sm">{suitSymbols[suit]}</p>
      </div>

      {/* Center symbol */}
      <div className={`flex items-center justify-center ${suitColor}`}>
        <p className="text-4xl">{suitSymbols[suit]}</p>
      </div>

      {/* Bottom-right corner (rotated) */}
      <div className={`absolute bottom-2 right-2 transform rotate-180 ${suitColor}`}>
        <p className="text-xs font-bold">{value}</p>
        <p className="text-sm">{suitSymbols[suit]}</p>
      </div>
    </div>
  );
};

export default Card;