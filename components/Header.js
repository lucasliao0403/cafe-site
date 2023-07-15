// 'use client';

import {React, useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '/styles/Header.module.css';
import Burger from './Burger.js'


export default function Header(props) {

    
    return (
        <div className={styles.navbar}>
            <nav>
                <ul className={styles.wrapper}>
                    <div className={styles.logocontainer}>
                        <div className={styles.logowrapper}>
                            <Link href="/">
                                <div className={styles.imagewrapper}>
                                    <Image
                                        src={require("/public/logo-white.png")}
                                        fill={true}
                                        alt="cafe logo"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <Burger/>
                    
                    <div className={styles.navbarwrapper}>
                        <ul>
                            <Link href="/"><li className={styles.navbaritem}>Home</li></Link>
                            <Link href="/Menu"><li className={styles.navbaritem}>Menu</li></Link> 
                            <Link href="/Hours&Locations"><li className={styles.navbaritem}> Hours & Locations </li></Link>
                            <Link href="/AboutUs"><li className={styles.navbaritem}> About Us </li></Link>
                        </ul>
                    </div>
                </ul>
            </nav>
 
        </div>
    );
}
