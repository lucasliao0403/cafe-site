import React from 'react';
import Image from 'next/image'

import styles from '/styles/AboutUs.module.css'


function AboutUs(props) {
    return (
        <div>
             <div className={styles.imagecontainer}>
                <div className={styles.outerrectangle}> 
                    <div className={styles.innerrectangle}> 
                        <h1> About Us </h1>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image
                    src={require("/public/cafehero1alt.jpg")}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt="Cafe Display"
                    />
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.cardwrapper}>
                    <div className={styles.card}>
                        <div className={styles.imagewrapper}>
                            <Image
                            src={require("/public/aboutus1.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="Cafe Display"
                            />
                        </div>
                        <div className={styles.descriptionwrapper}>
                            <div className={styles.description}>
                                <h1> About Us </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardwrapper}>
                    <div className={styles.card}>
                        <div className={styles.imagewrapper}>
                            <Image
                            src={require("/public/aboutus2.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="Cafe Display"
                            />
                        </div>
                        <div className={styles.descriptionwrapper}>
                            <div className={styles.description}>
                                <h1> About Us </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardwrapper}>
                    <div className={styles.card}>
                        <div className={styles.imagewrapper}>
                            <Image
                            src={require("/public/aboutus3.png")}
                            fill={true}
                            style={{objectFit: "cover"}}
                            alt="Cafe Display"
                            />
                        </div>
                        <div className={styles.descriptionwrapper}>
                            <div className={styles.description}>
                                <h1> About Us </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;