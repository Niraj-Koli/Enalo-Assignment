import styles from "./Signup.module.css";

import background from "/background.jpeg";

import SignupForm from "./SignupForm";

export default function Signup() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img
                        src={background}
                        alt="Background Image"
                        className={styles.image}
                    />
                </div>
                <div className={styles.formContainer}>
                    <SignupForm />
                </div>
            </div>
        </>
    );
}
