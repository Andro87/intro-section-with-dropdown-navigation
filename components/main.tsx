import React from "react";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
    return (
        <main className={styles.main}>
            <picture className={styles.main_picture}>
                <source
                    srcSet="/images/image-hero-desktop.png"
                    media="(min-width:1080px)"
                ></source>
                <img src="/images/image-hero-mobile.png" alt="" />
            </picture>
            <div className={styles.main_intro}>
                <h1> Make remote work</h1>
                <p>
                    Get your team in sync, no matter your location. Streamline
                    processes, create team rituals, and watch productivity soar.
                </p>
                <a href="#" className={styles.learn_more}>
                    Learn more
                </a>
                <div className={styles.companies_logo_container}>
                    <img src="/images/client-databiz.svg" alt="" />
                    <img src="/images/client-audiophile.svg" alt="" />
                    <img src="/images/client-meet.svg" alt="" />
                    <img src="/images/client-maker.svg" alt="" />
                </div>
            </div>
        </main>
    );
};
export default Main;
