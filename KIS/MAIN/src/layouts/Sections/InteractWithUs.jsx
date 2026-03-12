import { InteractContainer } from "../../components/utils/Container"
import { PrimaryButton } from "../../components/utils/Buttons"

export function InteractWithUs(){
    const socials = [
        {
            label: "Facebook",
            href: "https://www.facebook.com",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M14.5 8.25h2.1V5.6h-2.4c-2.4 0-3.8 1.42-3.8 3.7v1.95H8.1v2.65h2.3V20h2.8v-6.1h2.25l.35-2.65h-2.6V9.5c0-.78.2-1.25 1.3-1.25z"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="5" width="14" height="14" rx="4" ry="4" />
                    <circle cx="12" cy="12" r="3.2" />
                    <circle cx="16.5" cy="7.5" r="1" />
                </svg>
            ),
        },
        {
            label: "X",
            href: "https://x.com",
            icon: (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M6 5h3.4l3.2 4.6L16.9 5H20l-5.2 7.3L20.5 19H17l-3.7-5.1L9 19H6l5.4-7.6L6 5z"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
    ]

    return (
        <>  
            <section className="interact-section">
                <InteractContainer>
                    <div className="interact-header">
                        <div className="interact-title">
                            <span>INTERACT WITH US</span>
                        </div>
                        <p className="interact-subtitle">
                            Share ideas, ask questions, or send a quick hello. We keep the conversation warm, helpful, and easy to start.
                        </p>
                    </div>

                    <div className="interact-content">
                        <form className="interact-card interact-form" onSubmit={(event) => event.preventDefault()}>
                            <label className="interact-field">
                                <span>Name</span>
                                <input className="interact-input" type="text" placeholder="Your full name" />
                            </label>
                            <label className="interact-field">
                                <span>Email</span>
                                <input className="interact-input" type="email" placeholder="you@email.com" />
                            </label>
                            <label className="interact-field">
                                <span>Message</span>
                                <textarea className="interact-input interact-textarea" placeholder="Write your message here..."></textarea>
                            </label>
                            <PrimaryButton type="submit" className="interact-button">Send Message</PrimaryButton>
                        </form>
                    </div>

                    <div className="interact-socials">
                        <p className="interact-socials-title">Connect with us</p>
                        <div className="interact-socials-row">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    className="interact-social-link"
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </InteractContainer>
            </section>
        </>
    )
}
