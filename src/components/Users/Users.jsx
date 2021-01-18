import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/Users").then((response) => {
    
            this.props.setUsers(response.data.items);
        })
    }
        
    
    
    


    render() {
        return <div >
        {

            this.props.users.map(u => <div key={u.id} >
                <span>
                    <div className={styles.parent}>
                        <div >
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </div>


                        <div className={styles.box}>
                            <div> {"u.location.city"}</div>
                            <div> {"u.location.country"}</div>
                        </div>


                    </div>
                    <div>Hello</div>
                </span>

                <div >{u.status}</div>

                <div className={styles.parent2}>

                    {u.followed ? <button onClick={() => { this.props.follow(u.id) }}>FOLLOW</button> : <button onClick={() => { this.props.follow(u.id) }}>UNFOLLOW</button>}

                </div>

            </div>)

        }</div>

    }
}


export default Users;

//  -- это оборачивало вызов выше раньше
    // props.setUsers (
    // [
    //     {id :1, followed: false, fullName : "Genbu", status : 'Shogun', location: {city:'Edo', country: 'Japan'}, img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Shogun-Tokugawa-Ieyasu.png/220px-Shogun-Tokugawa-Ieyasu.png'/>},
    //     {id :2, followed: true, fullName : "Shunjiru", status : 'Ronin', location: {city:'Kyoto', country: 'Japan'}, img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ronin%2C_or_masterless_Samurai%2C_lunging_forward.jpg/220px-Ronin%2C_or_masterless_Samurai%2C_lunging_forward.jpg'/>},
    //     {id :3, followed: false, fullName : "Tosiro", status : 'Samurai', location: {city:'Nakano', country: 'Japan'}, img: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Samurai.png/220px-Samurai.png'/>}
    //   ]
    //)