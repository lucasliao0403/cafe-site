import React from 'react';
import Image from 'next/image'
import styles from '/styles/Menu.module.css'

function Menu(props) {
    return (
        <div>
            <div className={styles.imagecontainer}>
                <div className={styles.outerrectangle}> 
                    <div className={styles.innerrectangle}> 
                        <h1> Menu </h1>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image
                    src={require("/public/cafehero2alt.jpg")}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt="Cafe Display"
                    />
                </div>
            </div>

            <div className={styles.selection}>
                <div className={styles.selectioncontainer}>
                    <div className={styles.item}>
                        Coffee Menu
                    </div>
                    <div className={styles.item}>
                        Bakery Menu
                    </div>
                    <div className={styles.item}>
                        Lunch Menu
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;