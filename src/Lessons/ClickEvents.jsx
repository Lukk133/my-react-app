

function Button(){

   const handleClick = (e) => e.target.textContent = "Ouch!";

    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click me :D</button>
    )
}

export default Button

// //  let count = 0
//     const handleClick = (name) => {
//         if(count < 3){
//             count ++;
//             console.log(`${name} you clicked me ${count} times`);
//         } else{
//             console.log(`${name} stop clicking me`);
//         }
//     }