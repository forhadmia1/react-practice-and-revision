import React, { useEffect, useState } from 'react';

const Table = () => {
    //fetch data with api
    const [titles,setTitles]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then( res=> res.json())
            .then(data => setTitles(data))
    },[])
    return (
        <div>
            {
                titles.map(title=> <h3 key={title.id}>{title.title} </h3>)
            }
        </div>
    );
};

export default Table;