import { useState } from "react";

export default function Contact() {
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("access_key", "95bb745b-ba15-48d1-9079-3141c573b06c");

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setIsFormSubmitted(true);
                    setErrorMessage({
                        name: "",
                        email: "",
                        message: ""
                    });
                    e.target.reset();

                    setTimeout(() => {
                        setIsFormSubmitted(false);
                    }, 5000);
                } else {
                    console.error("Form submission failed");
                }
            })
            .catch(error => {
                console.error("An error occurred while submitting the form:", error);
            });
    };

    return (
        <div className="app-container">
            <h2 className="text-center">Contact Me</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                {isFormSubmitted && (
                    <div className="success-message">
                        <h2>
                            Thank you for reaching out! I'll contact you soon!
                        </h2>
                    </div>)}
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
    );
}