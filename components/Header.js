// 'use client';

import {React, useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '/styles/Header.module.css';


export default function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <div className={styles.logocontainer}>
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
                    <div className={styles.navbarwrapper}>
                    <Link href="/"><li className={styles.navbaritem}>Home</li></Link>
                    <Link href="/Menu"><li className={styles.navbaritem}>Menu</li></Link> 
                    <Link href="/Hours&Locations"><li className={styles.navbaritem}> Hours & Locations </li></Link>
                    <Link href="/AboutUs"><li className={styles.navbaritem}> About Us </li></Link>
                    </div>
                </ul>
            </nav>
 
        </div>
    );
}
