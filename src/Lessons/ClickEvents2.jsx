
function ProfilePicture(){
    const imageUrl = '../public/vite.svg';

    const handleClick = (e) => e.target.style.display = "none";
    
    return(
        <img src={imageUrl} alt="Profile" onClick={(e) => handleClick(e)}></img>
    )
}

export default ProfilePicture