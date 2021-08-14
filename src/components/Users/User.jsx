import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';




let User = ({user, followingInProgress, unfollow, follow }) => {
   
    
    
    return (
       

            <div >
                <span>
                    <div className={styles.parent}>
                        <div >
                            <NavLink to = {'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>


                        <div className={styles.box}>
                            <div> {"user.location.city"}</div>
                            <div> {"user.location.country"}</div>
                        </div>


                    </div>
                    <div>{user.name}</div>
                </span>

                <div >{user.status}</div>

                <div className={styles.parent2}>

                     {user.followed 
                     ? <button disabled={followingInProgress.some(id => id === user.id)}
                     
                     onClick={() => { unfollow(user.id); }}>
                         unfollow</button>

                     : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id); }}>
                         follow</button>
                    }

                </div>

            </div>)

        
}

export default User;