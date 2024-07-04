import React from "react";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Interests from "@/components/Interests";

export default function Home() {
  return (
    <main>
      <About />
      <Interests />
      <ContactForm />
    </main>
  );
}
