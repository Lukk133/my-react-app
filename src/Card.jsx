import profilePic from './assets/pobrane.jpg'

function Card(){
    return(
        <div className="card">
            <img className="cardImage" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Gigachad</h2>
            <p className='card-text'>I am a student and play piano</p>
        </div>
    )
}

export default Card