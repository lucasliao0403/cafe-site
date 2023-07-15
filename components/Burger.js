// 'use client'

import {React, useState} from 'react'
import styles from '/styles/Burger.module.css';
import Link from "next/link";
import Image from 'next/image';


function Burger(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    }

    return (
        <>
            <div className={styles.hamburgerwrapper}>
                <div className={styles.hamburger} onClick={toggle}>
                    <div className={styles.iconwrapper}> 
                        <div className={styles.iconbar}/> 
                        <div className={styles.iconbar}/> 
                        <div className={styles.iconbar}/> 
                    </div>
                    <ul style={{ top: isOpen ? '0px' : '-500px',
                                }}
                               >
                        <Link href="/"><li className={styles.item}>Home</li></Link>
                        <Link href="/Menu"><li className={styles.item}>Menu</li></Link> 
                        <Link href="/Hours&Locations"><li className={styles.item}> Hours & Locations </li></Link>
                        <Link href="/AboutUs"><li className={styles.item}> About Us </li></Link>
                        
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Burger;