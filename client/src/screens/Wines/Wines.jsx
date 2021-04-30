import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from '../../components/Layout/Card/Card';
import { getAllWines } from "../../services/wines";

export default function Wines() {
  const [allWines, setAllWines] = useState([]);

  useEffect(() => {
    fetchWines();
  }, []);

  const fetchWines = async () => {
    const wines = await getAllWines();
    setAllWines(wines);
  };
  return (
    <div>
      <h1>Wines</h1>
        {allWines.map((wine) => (
          <React.Fragment key={wine.id}>
            <Link to={`/wines/${wine.id}`}>
              <Card
                name={wine.name}
                image={wine.img_url}
                vintage={wine.vintage}
                varietal={wine.varietal}
              />
            </Link>
          </React.Fragment>
        ))}
    </div>
  )
}