import React from "react";
import { AiOutlinePlusSquare, AiFillStar } from "react-icons/ai";

const TrendingProducts = () => {
  // Arreglo estático de productos para el ejemplo
  const products = [
    { id: '001', name: 'PRODUCTO #001', rating: 5.0, description: 'NO LISTADO', price: 'CL$ 10,000.00', image: '/HeavenImage.png' },
    { id: '002', name: 'PRODUCTO #002', rating: 5.0, description: 'NO LISTADO', price: 'CL$ 10,000.00', image: '/HeavenImage.png' },
    { id: '003', name: 'PRODUCTO #003', rating: 5.0, description: 'NO LISTADO', price: 'CL$ 10,000.00', image: '/HeavenImage.png' },
    { id: '004', name: 'PRODUCTO #004', rating: 5.0, description: 'NO LISTADO', price: 'CL$ 10,000.00', image: '/HeavenImage.png' },
  ];

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 pl-8">TENDENCIA</h2>
      <p className="text-xl text-gray-600 mb-6 pl-8">ARTÍCULOS MÁS DESEADOS</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col bg-white rounded-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}> {/* Aspect ratio de 1:1 */}
              <img className="absolute top-0 left-0 w-full h-full object-cover" src={product.image} alt={`Producto ${product.name}`} />
              <AiOutlinePlusSquare className="absolute top-2 right-2 text-gray-400" size="24" />
            </div>
            <div className="p-4 items-center">
            <div className="flex items-center mb-2">
                <AiFillStar className="text-teal-500" />
                <span className="text-teal-500 text-sm ml-1">{product.rating}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{product.name}</h3>
              <p className="text-gray-700 text-sm mb-1">
                {product.description}
              </p>
              <p className="text-gray-900 text-lg font-bold">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TrendingProducts;