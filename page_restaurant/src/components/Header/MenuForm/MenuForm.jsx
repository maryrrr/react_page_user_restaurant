import React from 'react'
import './MenuForm.styles.scss'
export const MenuForm = () => {
  
   const dishes = [
    {
      id: 1,
      name: "Ensalada mixta",
      description: "Lechuga,tomate,cebolla,atun,huevo cocido,vinagre,sal",
      price: 10
    },
    {
      id: 2,
      name: "Doarada a plancha",
      description: "pescado",
      price: 20
    },
    {
      id: 3,
      name: "postre",
      description: "Natillas",
      price: 15
    }
  ];

    return (
      <div className="menu-list">
        <h1 className='menu-list__parrafo' >Menu del restaurante</h1>
        <ul className='menu-list__list'>
          {dishes.map((dish) => (
            <li key={dish.id} className='menu-list__items'>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p>Precio: {dish.price} €</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

