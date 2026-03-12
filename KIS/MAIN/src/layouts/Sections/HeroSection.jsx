import { useEffect } from "react";
import heroBg from "../../assets/images/bg_1.jpg";
import { supabase } from "../../client/supabase-client";

export function HeroSection() {

    return (
        <>
            <section className="hero-section">
                <img className="hero-bg" src={heroBg} alt="" aria-hidden="true" />
                <div className="hero-inner">
                    <p className="hero-eyebrow">Kaytitinga Integrated School</p>
                    <h1 className="hero-title">KIS</h1>
                </div>
            </section>
        </>
    )
}
