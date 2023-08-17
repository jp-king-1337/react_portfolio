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

    const isSubmitDisabled = Object.values(errorMessage).some(error => error !== "");

    return (
        <>
            <div className="app-container">
                <h2 className="text-center">Contact Me</h2>

                <form className="contact-form" action="https://api.web3forms.com/submit" method="POST" id="form">
                    <input type="hidden" name="access_key" value="95bb745b-ba15-48d1-9079-3141c573b06c" />
                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <input type="checkbox" name="botcheck" id="" style="display: none;" />
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
                        <div className="error-message">{errorMessage.email}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="How can I help you?"
                            onBlur={handleBlur}
                        />
                        <div className="error-message">{errorMessage.message}</div>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitDisabled}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
