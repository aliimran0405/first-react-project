import { data } from '../Data';
import { Link } from 'react-router-dom';

function Card() {

    // const listItems = data.map(d => <><img src={d.shoeImg}/>
    //                                 <p className='brand-name'>{d.brandName}</p>
    //                                 <p className='sneaker-name'>{d.sneakerName}</p></>
    // );

    return(
        <div className='card-container'>
            {data.map(item => (
                <Link to={`/shoe/${item.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="card-wrapper" key={item.sneakerName}>
                        <img className="shoe-img" src={item.shoeImg} alt={item.sneakerName} />
                        <p className="brand-name">{item.brandName}</p>
                        <p className="sneaker-name">{item.sneakerName}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Card