import React from 'react'
import logo from '../images/logo.png'

export default function Footer() {
    return (
        <footer>
        <div class="footer_logo">
            <a href="index.html">
                <img src={logo} alt="Logo" width="150px"/>
            </a>
        </div>
        <div class="pages">
            <h3>Site Map</h3>
            <a href="/">Home</a>|
            <a href="/">Buzz</a>|
            <a href="/">Events</a>|
            <a href="/">Tech</a>|
            <a href="/">Non-Tech</a>|
            <a href="/">Verses</a>
            </div>
        <div class="pages">
            <h3>Content</h3>
            <a href="/">Open Letter</a>|
            <a href="/">Connect-ions</a>|
            <a href="/">Fiction</a>|
            <a href="/">Interviews</a>|
            <a href="/">Alumni Speaks</a>|
            <a href="/">Past Year Papers</a>
            </div>
        <div class="pages">
            <h3>Important</h3>
            <a href="/">About</a>|
            <a href="/">Contact</a>|
            <a href="/">Privacy Policy</a>
        </div>
        <div class="social">
            <h3>Follow us</h3>
            <a href="https://www.instagram.com/dduconnect" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/dduconnect" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/company/dduconnect" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/dduconnect" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/channel/UCL_HeXMG8OnytZZtIRgkpQA" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
            <hr />
            <br />
        <p>&copy; 2022 DDU Connect, All rights recieved</p>
    </footer>
    )
}
