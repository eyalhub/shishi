import CustomGrid from "./CustomGrid";


const data = [
    {"imageUrl": "/parases.jpeg", "title": "פרסים"}, 
    {"imageUrl": "/horror.jpeg", "title": "אימה"},
    {"imageUrl": "/idf.jpeg", "title": "צבא"},
    {"imageUrl": "/white.jpeg", "title": "אשכנזים"},
    {"imageUrl": "/trans.jpeg", "title": "טראנס"},
    {"imageUrl": "/gays.jpeg", "title": "גייז"},
    {"imageUrl": "/easywomen.jpeg", "title": "ציבורי"},
    {"imageUrl": "/milf.jpeg", "title": "מילפיות"},
    {"imageUrl": "/romans.jpeg", "title": "רומנים"},
    {"imageUrl": "/orgy.jpeg", "title": "אורגיה"},
    {"imageUrl": "/bbc.jpeg", "title": "bbc"},
    {"imageUrl": "/volunteer.jpeg", "title": "מחויבות אישית"},
    {"imageUrl": "/greeks.jpeg", "title": "ארץ זרה"},
    {"imageUrl": "/rape.jpeg", "title": "אונס"},
    {"imageUrl": "/ass.jpeg", "title": "תחת"},
    {"imageUrl": "/eyal.jpg", "title": "שידול קטינות"},
];

const Categories = () => {
    return (  
        <div className="categories">
            <div className="title">
                <p>:קטגוריות</p>
            </div>
            <CustomGrid data={data} url={"/categories"}/>
        </div>
    );
}
 
export default Categories;