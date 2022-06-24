import CustomGrid from "./CustomGrid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [data, setData] = useState(null);
    const url = "https://raw.githubusercontent.com/eyalhub/shishi/main/public/data.json";
    const backendUrl = "https://eyalback.herokuapp.com/static/data.json";
    

    useEffect(() => {
        axios.get(url).then(res => {
            setData(res.data);
        });
        console.log("nice")
        let promise = new Promise( (resolve, reject) => {
            axios.get(backendUrl).then(res => {
                
                resolve(res.data);
            }).catch(e => {console.log("banana");reject(e);});  
        });
        promise.then(backendData => setData(backendData));
    }, [])
    

    return (  
        data && <div className="categories">
            <div className="title">
                <p>:קטגוריות</p>
                <Link to={"/upload"}><p className="upload"><span>הוספת קטגוריה +</span></p></Link>
            </div>
            <CustomGrid data={data} url={"/categories"}/>
        </div>
    );
}
 
export default Categories;