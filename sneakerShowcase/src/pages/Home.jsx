import Card from "../Components/Card";
import React, { useEffect } from "react";

function Home() {

    useEffect(() => {
        document.title = 'Home';
    });

    return(
        <>
        <h1>FIND THE PERFECT SNEAKERS FOR YOU</h1>
        <Card />
        </>
    );
}

export default Home;