import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {motion, MotionConfig} from "framer-motion";
import styles from '/styles/Home.module.css'

export default function Home() {
  return (

    <div className='home'>
        <Head>
        <title>Cafe Cafe</title>
        <meta name="description" content="An Example Cafe Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/logo.png" />
        </Head>
     
        <div className={styles.hero}>
            <div className={styles.imagecontainer}>
                <div className={styles.outerrectangle1}> 
                        <motion.div 
                        viewport={{ once: true }}
                        initial={{ x: 500 , y: 0, opacity: 0}}
                        animate={{ x: 0 , y: 0, opacity: 1}}
                        transition={{ duration: .8, delay: 0}}
                        >
                            <Link href="/">
                                <div className={styles.innerrectangle1}> 
                                    <h1> Cafe Cafe </h1>
                                    <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                                </div>
                            </Link>
                        </motion.div>

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

            <div className={styles.imagecontainer}>
                <div className={styles.outerrectangle2}> 
                    <motion.div 
                    viewport={{ once: true }}
                    initial={{ x: -500 , y: 0, opacity: 0}}
                    animate={{ x: 0 , y: 0, opacity: 1}}
                    transition={{ duration: .8, delay: 0}}
                    >
                        <Link href='./AboutUs'>
                            <div className={styles.innerrectangle2}> 
                                <h1> Menu </h1>
                                <h2> Coffee | Bakery | Lunch </h2>
                            </div>
                        </Link>
                    </motion.div>
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

            <div className={styles.imagecontainer}>
                <div className={styles.outerrectangle3}> 
                    <motion.div 
                    viewport={{ once: true }}
                    initial={{ x: 500 , y: 0, opacity: 0}}
                    animate={{ x: 0 , y: 0, opacity: 1}}
                    transition={{ duration: .8, delay: 0}}
                    >
                        <Link href='./Hours&Locations'>
                            <div className={styles.innerrectangle3}> 
                                <h1> Hours </h1>
                                <h2> & Locations</h2>
                            </div>
                        </Link>
                    </motion.div>
                </div>
                <div className={styles.image}>
                    <Image
                    src={require("/public/cafehero3alt.jpg")}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt="Cafe Display"
                    />
                </div>
            </div>


        </div>
     </div> 

  )
}
