import {Component, useState} from "react";

function FruitList() {

    const [fruit,setFruit] = useState('')
    const [fruitList, setFruitList] = useState([])
    const displayFruits = () => fruitList.map((item,index) => <li key={index}>{fruit}</li>)
    function handleInput(e) {
       const fruitValue = e.target.value
        setFruit(fruitValue)
    }

    function handleAddFruit(e){
        e.preventDefault()
        setFruitList([...fruitList, fruit])
    }
    return <>
        <span>
            <form>
                <input onChange={handleInput} type="text" id='fruit'/>
                <input onClick={handleAddFruit} type="submit" value='Add fruit'/>
            </form>
        </span>
        <h1 className='h1'>Fruits : </h1>
        <ul>
            {displayFruits()}
        </ul>
    </>
}
export default FruitList;