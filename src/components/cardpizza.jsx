import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card mb-4">
    <img src={img} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        <strong>Ingredientes:</strong>
        <br />
        🍕 {ingredients.join(', ')}
      </p>
      <p className="card-text">
        <strong>Precio:</strong> ${price.toLocaleString()}
      </p>
      <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-primary">Ver Más</a>
        <a href="#" className="btn btn-secondary">Añadir </a>
      </div>
    </div>
  </div>
);

export default CardPizza;