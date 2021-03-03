import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';



let Users = ({page, totalUserCount, onPageChanged, pageSize, users, ...props}) => {

    
    //   let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    //     let pages = [];
    //     for (let i = 1; i <= pagesCount; i++) {
    //         pages.push(i);
    //     }

    return <div >
        {/* <div>
            {pages.map(p => {
                return <span className={props.page === p && styles.selectedPage}
                    onClick={() => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div> */}
        <Paginator page={page} onPageChanged={onPageChanged} totalUserCount={totalUserCount} pageSize ={pageSize} />
        <div>
        {

            users.map(u => <User 
                user = {u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                unfollow = {props.unfollow}
                follow = {props.follow}
                 />)
                
        }</div>
    </div>
}

export default Users;