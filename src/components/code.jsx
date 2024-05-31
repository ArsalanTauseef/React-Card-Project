import './code.css';

const UserCard = (props) => {
    const user = props.u;

    return (
        <div className='user-card'>
            <div className='inside-card'>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="user-image" />
            <p id='style-name'>{user.firstName} {user.lastName}</p>
            <p>{user.region}</p>
            <p>{user.description}</p>
            <div id='buttons'>
                <button>Message</button>
                <button>Follow</button>
            </div>
            </div>
            <div id='bottom-lvl'>
                <div id='style-spans'>
                    <h5>Skill</h5>
                    <hr />
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                    <span>React</span>
                    <span>Node.js</span>
                </div>
            </div>
        </div>
    )

}
export default UserCard;
