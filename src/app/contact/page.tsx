import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | BongoArt",
    description: "Get in touch with BongoArt. Visit our showroom in Yogyakarta or contact us for custom furniture inquiries.",
    openGraph: {
        title: "Contact Us | BongoArt",
        description: "We'd love to hear from you. Visit our workshop or send us a message.",
        images: ["/images/hero.webp"],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
