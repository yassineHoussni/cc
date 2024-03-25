import Product from "./Products";

function ListProducts(){
    const products = [
        {
        id: 1,
        title: 'PC Portable Gamer HP VICTUS',price:
        '7490 DH',
        thumbnail : 'gucci.png.jpeg'
        },
        {
        id: 2,
        title: 'PC Portable Gamer HP VICTUS',price:
        '2190 DH',
        thumbnail : 'gucci.png.jpeg'
        },
        {
        id: 3,
        title: 'Pc Portable Chromebook Acer',price:
        '3640 DH',
        thumbnail: 'nike jordan.webp'
        },
        {
        id: 4,
        title: 'PC Portable - HUAWEI',price:
        '1270 DH',
        thumbnail: 'gucci.png.jpeg'
        },
        ];
     return (
        <>
        <main className="container">
 <h1>Ordinateurs portables</h1>
 <div className="row mb-2">
   {products.map((item) => <Product price={item.price} title={item.title} thumbnail={item.thumbnail}/>)}
 </div>
 </main>

        </>
     ) 
     }
export default ListProducts;