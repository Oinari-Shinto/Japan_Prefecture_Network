import React from 'react';
import styles from './Paginator.module.css';




let Paginator = ({totalUserCount, pageSize, page, onPageChanged }) => {
      let pagesCount = Math.ceil(totalUserCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return <div>
            {pages.map(p => {
                return <span className={page === p && styles.selectedPage}
                    onClick={() => { onPageChanged(p); }}>{p}</span>
            })}
        </div>

        }

export default Paginator;