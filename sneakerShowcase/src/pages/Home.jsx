import Card from "../Components/Card";
import React, { useEffect } from "react";
import { data } from "./../Data";

function Home() {

    useEffect(() => {
        document.title = 'Home';
    }, []);

    return(
        <>
            <h1>FIND THE PERFECT SNEAKERS FOR YOU</h1>
            <div className='card-container'>
                {data.map(item => (
                    <Card key={item.sneakerName} id={item.id} sneakerName={item.sneakerName} shoeImg={item.shoeImg} brandName={item.brandName}/>
                ))}
            </div>
        </>
    );
}

export default Home;