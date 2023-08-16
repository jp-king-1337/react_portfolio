export default function Contact() {
    return (
        <>
            <div className="app-container">
                <h2 className="text-center">Contact Me</h2>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}
