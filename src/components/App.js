import React, {useState, useEffect} from "react";

function App() {
    const [dogImage, setDogImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((r) => r.json())
        .then((data) => { 
            setDogImage(data.message);
            setIsLoaded(true);
        });
    }, []);

    if (!isLoaded) return <h3>Loading...</h3>;

    return (
        <div>
            <img src={dogImage} alt="A Random Dog"></img>
        </div>
    )
}

export default App;
