import React, { useEffect} from "react";
 
const TodoList = ({ getProducts, products }) => {
    useEffect(() => {
      getProducts();
    }, []);
  return (
    <div className="flex flex-wrap gap-8">
      {products.map((item) => (
        <div 
          className="m-3 rounded-md border-2 border-black w-1/4" 
          key={item.id}>

          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
};

export default TodoList;
