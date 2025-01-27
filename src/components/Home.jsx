import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechFreak</h1>
                    <p> Solution to all your problems </p>
                </main>

            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                    We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
                    </p>
                </div>

            </div>
            <div className="home3"id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>“Welcome to TechFreak, your one-stop destination for the latest in technology and innovation. Our mission is to keep you updated with the rapidly evolving world of technology. From the newest gadgets to groundbreaking discoveries in tech, we cover it all. Our team of dedicated tech enthusiasts is committed to delivering precise, insightful, and engaging content that caters to both tech novices and experts. We delve into the details, offering in-depth reviews, detailed tutorials, and comprehensive tech news. At TechVerse, we believe in the power of technology to transform lives and we strive to make this transformation accessible to everyone. Join us on this exciting journey into the future of technology.”</p>
                </div>

            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>
                        Brands
                    </h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:"0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay:"0.7s",
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay:"1s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );

}

export default Home;