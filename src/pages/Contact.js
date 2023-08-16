import { useState } from "react";

export default function Contact() {
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleBlur = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        if (fieldValue.trim() === "") {
            setErrorMessage((prevErrors) => ({
                ...prevErrors,
                [fieldName]: "This field is required."
            }));
        } else {
            setErrorMessage((prevErrors) => ({
                ...prevErrors,
                [fieldName]: ""
            }));
        }
    };

    return (
        <>
            <div className="app-container">
                <h2 className="text-center">Contact Me</h2>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="What is your name?"
                            onBlur={handleBlur}
                        />
                        <div className="error-message">{errorMessage.name}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="What is your email?"
                            onBlur={handleBlur}
                        />
                        <div className="error-message">{errorMessage.name}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="How can I help you?"
                            onBlur={handleBlur}
                        />
                        <div className="error-message">{errorMessage.name}</div>
                    </div>
                    <button
                        type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
