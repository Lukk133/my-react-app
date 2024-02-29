import {useState} from "react"

function MyComponent(){
    
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName("Spongebob")
    }
    const incrementAge = () =>{
        setAge(age + 2)
    }
    const [isEmployed, setIsEmployed] = useState(false)

    const toggleEmpoyment = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmpoyment}>Toggle status</button>
        </div>
    )


}

export default MyComponent