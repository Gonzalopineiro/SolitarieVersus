// src/app/page.tsx
import React from 'react';
import Card from './components/Card';

export default function Home() {
  const cards = [
    { suit: 'hearts', value: 'A' },
    { suit: 'spades', value: 'K' },
    { suit: 'diamonds', value: '10' },
    { suit: 'clubs', value: '7' },
  ];

  return (
    <main className="flex items-center justify-center min-h-screen bg-green-600">
      <div className="flex space-x-4">
        {cards.map((card, index) => (
          <Card key={index} suit={card.suit} value={card.value} />
        ))}
      </div>
    </main>
  );
}