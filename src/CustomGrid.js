import { Link } from 'react-router-dom';

const CustomGrid = ({data, url, defaultImage=null}) => {

    let firstImage = data[0].imageUrl

    return (  
        <div className="flex">
            <div className={`custom-grid`}>
                {data.map((item, idx) => (
                    <div className="grid-item-preview" key={ idx }>
                        <Link to={`${url}/${item.title}`}>
                            <img src={ item.imageUrl? item.imageUrl: firstImage } alt="not found" />
                            {item.title && <p>{item.title}</p>}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default CustomGrid;