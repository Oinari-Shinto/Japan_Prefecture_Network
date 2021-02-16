import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { userApi  } from '../../api/api';



let Users = (props) => {
      let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return <div >
        <div>
            {pages.map(p => {
                return <span className={props.page === p && styles.selectedPage}
                    onClick={() => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>

        {

            props.users.map(u => <div key={u.id} >
                <span>
                    <div className={styles.parent}>
                        <div >
                            <NavLink to = {'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>


                        <div className={styles.box}>
                            <div> {"u.location.city"}</div>
                            <div> {"u.location.country"}</div>
                        </div>


                    </div>
                    <div>{u.name}</div>
                </span>

                <div >{u.status}</div>

                <div className={styles.parent2}>

                     {u.followed 
                     ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                     
                     onClick={() => { props.unfollow(u.id); }}>
                         unfollow</button>

                     : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id); }}>
                         follow</button>
                    }

                </div>

            </div>)

        }</div>
}

export default Users;