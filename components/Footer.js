import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '/styles/Footer.module.css';

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <div className={styles.logowrapper}>
                    <Link href="/">
                        <Image
                            src={require("/public/logo-white.png")}
                            fill={true}
                            alt="cafe logo"
                        />
                    </Link>
                </div>
            </div>
                
            <div className={styles.media}>
                <div className={styles.mediacontainer}>
                    <div className={styles.mediawrapper}>
                        <Link href="https://www.instagram.com">
                            <Image
                                src={require("/public/instagram.png")}
                                fill={true}
                                alt="instagram logo"
                            />
                        </Link>
                    </div>
                    <div className={styles.mediawrapper}>
                        <Link href="https://www.google.com/maps">
                            <Image
                                src={require("/public/map.png")}
                                fill={true}
                                alt="google maps logo"
                            />
                        </Link>
                    </div>
                    <div className={styles.mediawrapper}>
                        <Link href="https://www.facebook.com">
                            <Image
                                src={require("/public/facebook.png")}
                                fill={true}
                                alt="facebook logo"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.contact}>
                <p>
                    (1)-888-888-8888
                </p>
            </div>
        </div>
    );
}

export default Footer;