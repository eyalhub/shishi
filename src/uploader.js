import axios from "axios";
import { useState } from "react";

const UploadImage = () => {
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const reset = () => {
        uploaded = false;
        setErrorMessage("");
    }
    let uploaded = false;

    const uploadHandler = () => { 
        if(image !== null && text !== "" && !uploaded){
            console.log("submit");
            const formData = new FormData();
            formData.append('image', image);
            formData.append('text', text);
            axios.post('https://eyalback.herokuapp.com/uploadImage',formData);
            uploaded = true;
            
        }
        else{
            setErrorMessage("בבקשה תמלא פרטים תקינים")
        }
        
    }



    return (  
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <p style={{color: "white"}}>upload a new photo</p>
            {errorMessage && <h1 style={{color: "red", textAlign: "end"}}>{errorMessage}</h1>}
            <img className="image-preview" src={ image && URL.createObjectURL(image) } />
            <input
                type="file" 
                id="img" 
                name="img" 
                //accept="video/*,image/*" 
                accept="image/*" 
                onChange={(event) => {
                    if(event.target.files[0]){
                        setImage(event.target.files[0]);
                        reset();
                    }    
                }} 
            />
            <input type="text" onChange={(e) => {reset(); setText(e.target.value)}} />
            <button type="submit" onClick={uploadHandler}>submit</button>
        </div>
    );
}
 
export default UploadImage;