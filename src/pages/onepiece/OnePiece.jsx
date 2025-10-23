import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DevilFruit from './DevilFruit';

export default function OnePiece() {
  const [devilFruits, setDevilFruits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDevilFruits() {
      try {
        const response = await axios.get('https://api.api-onepiece.com/v2/fruits/en');
        setDevilFruits(response.data);
      } catch (error) {
        console.error('Error fetching devil fruits:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDevilFruits();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <h2>Devil Fruits</h2>
    <div className="devil-fruits-list">
      {devilFruits.map((fruit) => (
        <DevilFruit fruit={fruit} />
      ))}
    </div>
    </>
  );
}
