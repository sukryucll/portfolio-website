import React from 'react'
import { social } from '../data/dummydata'

function Footer() {
  return (
    <div>
        <footer>
            {social.map((item)=>(
                <>
                <i data-aos="zoom-in-left">{item.icon}</i>
                </>
            ))}
            <p data-aos="zoom-in-right">© {new Date().getFullYear()} All Rights Reserved. Designed and Developed by Sükrü Yücel.
            </p>
        </footer>
    </div>
  )
}

export default Footer