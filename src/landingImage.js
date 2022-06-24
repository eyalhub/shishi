import { Link } from "react-router-dom";


const AppBar = () => {

    return (  
        <Link to="/">
            <div className="appBar">
                <div className="wrapper">
                    <div className="logo">
                        <p className="orangeBox">אייל</p> 
                        <p>שישי</p>
                    </div>
                </div>
            </div>
        </Link>
            
    );
}
 
export default AppBar;