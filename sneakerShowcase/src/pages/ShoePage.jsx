import { useParams } from "react-router-dom";

function ShoePage() {
    
    const { shoeId } = useParams();

    return(
        <p>I clicked on shoe with id: {shoeId}</p>
    );
}

export default ShoePage;