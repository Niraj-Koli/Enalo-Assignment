import { Button, Checkbox, Form, Input } from "antd";

import styles from "./SignupForm.module.css";

export default function SignupForm() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className={styles.form}>
            <div className={styles.formHeader}>
                <div className={styles.formTitle}>Sign Up</div>
                <div className={styles.formSubtitle}>
                    Or <span className={styles.spanTitle}>Sign In</span>
                </div>
            </div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <div className={styles.groupContainer}>
                    <Form.Item>
                        <Input
                            placeholder="Email"
                            className={styles.textfield}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Input.Password
                            placeholder="Password"
                            className={styles.textfield}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Input.Password
                            placeholder="Re-Enter Password"
                            className={styles.textfield}
                        />
                    </Form.Item>
                </div>

                <div className={styles.rememberMe}>
                    <div>
                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </div>
                    <div>{"Forget Password ?"}</div>
                </div>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className={styles.button}>
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
