import React, { useContext, useState } from "react";
import styles from "./header.module.scss";
import ContainerContext from "../contexts/ContainerContext";
//
import Menu from "../svgs/icon-menu.svg";
import Close from "../svgs/icon-close-menu.svg";
import ArrowDown from "../svgs/icon-arrow-down.svg";
import ArrowUp from "../svgs/icon-arrow-up.svg";
import Todo from "../svgs/icon-todo.svg";
import Calendar from "../svgs/icon-calendar.svg";
import Reminders from "../svgs/icon-reminders.svg";
import Planning from "../svgs/icon-planning.svg";

//
const Header: React.FunctionComponent = () => {
    //
    const context = useContext(ContainerContext);
    const [open, setOpen] = context.open;
    const [featuresBox, setFeaturesBox] = useState(false);
    const [companyBox, setCompanyBox] = useState(false);
    //
    return (
        <header className={styles.header}>
            <img src="/images/logo.svg" alt="company logo" />
            <button
                type="button"
                title="menu"
                className={styles.hamburger_btn}
                onClick={() => setOpen(!open)}
            >
                {!open ? <Menu /> : <Close />}
            </button>
            <nav
                className={`${styles.navigation} ${
                    open ? styles.navigation_mobile : null
                }`}
            >
                <div
                    className={styles.dropdown_container}
                    onClick={() => setFeaturesBox(!featuresBox)}
                >
                    <button
                        type="button"
                        title="features"
                        className={styles.dropdown_btn}
                    >
                        Features
                    </button>

                    {!featuresBox ? <ArrowDown /> : <ArrowUp />}

                    {featuresBox ? (
                        <div className={styles.dropdown_box}>
                            <div className={styles.wrapper}>
                                <Todo />

                                <a href="#"> Todo List</a>
                            </div>
                            <div className={styles.wrapper}>
                                <Calendar />

                                <a href="#"> Calendar</a>
                            </div>
                            <div className={styles.wrapper}>
                                <Reminders />

                                <a href="#"> Reminders</a>
                            </div>
                            <div className={styles.wrapper}>
                                <Planning />

                                <a href="">Planning</a>
                            </div>
                        </div>
                    ) : null}
                </div>

                <div
                    className={styles.dropdown_container}
                    onClick={() => setCompanyBox(!companyBox)}
                >
                    <button
                        type="button"
                        title="company"
                        className={styles.dropdown_btn}
                    >
                        Company
                    </button>

                    {!companyBox ? <ArrowDown /> : <ArrowUp />}

                    {companyBox ? (
                        <div
                            className={`${styles.dropdown_box} ${styles.dropdown_smaller_box}`}
                        >
                            <a href="#"> History</a>

                            <a href="#"> Our Team</a>

                            <a href="#"> Blog</a>
                        </div>
                    ) : null}
                </div>

                <a href="#">Careers</a>
                <a href="#">About</a>
            </nav>
            <div className={styles.header_interaction}>
                <button
                    type="button"
                    title="login"
                    className={styles.login_btn}
                >
                    Login
                </button>
                <button
                    type="button"
                    title="Register"
                    className={styles.register_btn}
                >
                    Register
                </button>
            </div>
        </header>
    );
};
export default Header;
