export default function Contact() {
    return (
        <>
            <h2 className="text-center">Contact Me</h2>
            <ul className="contact">
                <li>
                    <a href="mailto:jp.king.1337@gmail.com" className="contact_links">Email</a>
                </li>
                <li>
                    <a href="https://github.com/jp-king-1337" target="_blank" className="contact_links" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jpking1337/" target="_blank" className="contact_links" rel="noopener noreferrer">LinkedIn</a>
                </li>
            </ul>
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
        </>
    );
}
