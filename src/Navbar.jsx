import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="left">Hello, Welcome</div>
                <div className="right"><ul>
                    <li><a href="https://www.instagram.com/chira.g._?igsh=MWhtdTl0ZWIzc2xkNg==">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5A4.25 4.25 0 0116.25 20.5h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 2a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                        </svg></a></li>
                    <li><a href="https://www.linkedin.com/in/chirag-gowda-b10570351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.12 8.5h4.77v15H.12v-15zM8.22 8.5h4.58v2.04h.06c.64-1.21 2.22-2.48 4.56-2.48 4.88 0 5.78 3.21 5.78 7.37v8.08h-4.77v-7.15c0-1.71-.03-3.91-2.38-3.91-2.38 0-2.74 1.86-2.74 3.79v7.27h-4.77v-15z" />
                    </svg></a></li>
                    <li><a href="https://github.com/Chirag-gowdaa">Github</a></li>
                    <li></li>
                    <li></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
