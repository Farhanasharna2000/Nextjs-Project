import React from 'react';
import styles from './page.module.css'
export const metadata ={
    title:"About Page",
    description:"This is the about page"
}
const About = () => {
    return (
        <div>
           <h1 className={`${styles.title}`}>About NextJS Project</h1> 
        </div>
    );
};

export default About;