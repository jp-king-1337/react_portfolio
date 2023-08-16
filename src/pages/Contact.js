export default function Contact() {
    return (
        <>
            <div className="app-container">
                <h2 className="text-center">Contact Me</h2>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="What is your name?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="What is your email?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="How can I help you?" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
