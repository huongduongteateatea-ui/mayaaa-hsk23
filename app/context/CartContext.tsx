"use client";


import {
createContext,
useContext,
useState,
useEffect,
ReactNode
} from "react";



type Product = {

id:number;

title:string;

price:string;

image:string;

quantity:number;

};



type CartContextType = {


cart:Product[];

addToCart:(product:Product)=>void;

increase:(id:number)=>void;

decrease:(id:number)=>void;

remove:(id:number)=>void;

clearCart:()=>void;


};




const CartContext =
createContext<CartContextType | null>(null);






export function CartProvider({

children

}:{

children:ReactNode;

}){



const [cart,setCart]=useState<Product[]>([]);





// Lấy giỏ hàng đã lưu

useEffect(()=>{


const savedCart =
localStorage.getItem("mayaaa-cart");



if(savedCart){

setCart(JSON.parse(savedCart));

}


},[]);






// Tự động lưu mỗi khi giỏ hàng thay đổi

useEffect(()=>{


localStorage.setItem(

"mayaaa-cart",

JSON.stringify(cart)

);


},[cart]);








function addToCart(product:Product){


setCart((prev)=>{


const exist =
prev.find(
(item)=>item.id===product.id
);




if(exist){


return prev.map(item=>

item.id===product.id

?

{

...item,

quantity:item.quantity+1

}

:

item

);


}





return [

...prev,

{

...product,

quantity:1

}

];


});


}









function increase(id:number){


setCart(prev=>

prev.map(item=>

item.id===id

?

{

...item,

quantity:item.quantity+1

}

:

item

)

);


}










function decrease(id:number){


setCart(prev=>

prev.map(item=>

item.id===id && item.quantity>1

?

{

...item,

quantity:item.quantity-1

}

:

item

)

);


}









function remove(id:number){


setCart(prev=>

prev.filter(

item=>item.id!==id

)

);


}








function clearCart(){


setCart([]);


}







return (


<CartContext.Provider


value={{


cart,

addToCart,

increase,

decrease,

remove,

clearCart


}}


>


{children}


</CartContext.Provider>


);


}







export function useCart(){


const context =
useContext(CartContext);



if(!context){


throw new Error(
"useCart must be used inside CartProvider"
);


}



return context;


}