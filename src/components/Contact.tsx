import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (async () => {
      try {
        const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Failed to send message");

        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", message: "", category: "" });
      } catch (err) {
        console.error(err);
        toast({
          title: "Error",
          description: "Could not send message. Please try again or email us directly.",
        });
      }
    })();
  };

  // Track contact clicks: attempts gtag, dataLayer, and a server-side POST fallback.
  const trackContactClick = async (label: string) => {
    try {
      // Google Analytics 4 (gtag)
      const gtag = (window as any).gtag;
      if (typeof gtag === "function") {
        gtag("event", "click", {
          event_category: "contact",
          event_label: label,
        });
      }

      // Google Tag Manager dataLayer
      const dl = (window as any).dataLayer;
      if (Array.isArray(dl)) {
        dl.push({ event: "contact_click", category: "contact", label });
      }

      // Send a lightweight server-side record (best-effort)
      if (navigator && typeof navigator.sendBeacon === "function") {
        const url = "/api/track";
        const payload = JSON.stringify({ type: "contact_click", label, timestamp: Date.now() });
        navigator.sendBeacon(url, new Blob([payload], { type: "application/json" }));
      } else {
        // fallback fetch with keepalive
        await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: JSON.stringify({ type: "contact_click", label, timestamp: Date.now() }),
        }).catch(() => {
          /* ignore network errors for tracking */
        });
      }
    } catch (err) {
      // no-op; tracking must not break UX
      console.debug("tracking error", err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Get In Touch</h2>
          <p className="text-slate-700 text-lg max-w-3xl mx-auto">
            Ready to automate your operations? Contact us today to discuss your project requirements and discover how we can help transform your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Form */}
            <div>
              <Card className="bg-white text-slate-900 border border-slate-200 shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-slate-700 mb-2 block font-medium text-sm">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Patel"
                          aria-describedby="name-help"
                          className="bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 h-11 rounded-md px-3"
                          required
                        />
                        <p id="name-help" className="text-slate-500 text-xs mt-2">Please provide the full name for follow-up.</p>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-slate-700 mb-2 block font-medium text-sm">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          aria-describedby="email-help"
                          className="bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 h-11 rounded-md px-3"
                          required
                        />
                        <p id="email-help" className="text-slate-500 text-xs mt-2">We'll use this email to reply — expected response within 1 business day.</p>
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="category" className="text-slate-700 mb-2 block font-medium text-sm">
                          Product Category (optional)
                        </Label>
                        <select
                          id="category"
                          value={formData.category}
                          onChange={handleChange}
                          aria-describedby="category-help"
                          className="w-full bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 h-11 rounded-md px-3"
                        >
                          <option value="">-- Select a category --</option>
                          <option value="drives">Variable Frequency Drives</option>
                          <option value="servo">Servo Systems</option>
                          <option value="interface">Human Machine Interface (HMI)</option>
                          <option value="control">Programmable Logic Controllers (PLC)</option>
                          <option value="encoders">Encoders & Couplings</option>
                          <option value="power">Control & Power Components</option>
                          <option value="other">Other / Not sure</option>
                        </select>
                        <p id="category-help" className="text-slate-500 text-xs mt-2">Selecting a category helps us route your request to the right specialist.</p>
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="message" className="text-slate-700 mb-2 block font-medium text-sm">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project — timelines, quantities, and key specs are helpful."
                          aria-describedby="message-help"
                          className="bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 resize-none rounded-md px-3 py-2"
                          required
                        />
                        <p id="message-help" className="text-slate-500 text-xs mt-2">Include any relevant details so our team can prepare an accurate response.</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <Button
                        type="submit"
                        className="w-full md:w-auto bg-primary text-white hover:bg-primary/90 font-bold shadow-md transition-all duration-200 px-8"
                        size="lg"
                      >
                        Send Message
                      </Button>

                      <p className="text-sm text-slate-500 hidden md:block">Or email us at <a href="mailto:millenniumautomationsystem@gmail.com" className="text-primary underline">millenniumautomationsystem@gmail.com</a></p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right: Contact Info (cards stacked) */}
            <div className="space-y-6">
              <Card className="bg-white border border-slate-200 text-slate-900 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Office Address</h3>
                      <a
                        href="https://www.google.com/maps/place/9W7F+3FR,+Silvasa+Rd,+near+Via+Char+Rasta+Road,+Phase+2,+GIDC,+Vapi,+Gujarat+396195"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => trackContactClick("google_maps")}
                        className="text-slate-700 text-sm leading-relaxed hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/30 rounded transition-colors"
                        aria-label="Open office location in Google Maps"
                      >
                        6A, 1st Floor, Globe Chamber, Opp. Sardar Bhiladwala Bank, Near V.I.A Char Rasta, G.I.D.C., Vapi - 396195, Gujarat, India
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200 text-slate-900 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-slate-700 text-sm">
                        <a href="mailto:millenniumautomationsystem@gmail.com" className="hover:underline text-primary">millenniumautomationsystem@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200 text-slate-900 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone / WhatsApp</h3>
                      <div className="flex items-center gap-4">
                        <a
                          href="tel:+919904003445"
                          onClick={() => trackContactClick("phone")}
                          className="inline-flex items-center gap-2 text-slate-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-md px-2 py-1"
                          aria-label="Call Millennium Automation"
                        >
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-sm">+91 9904003445</span>
                        </a>

                        <a
                          href="https://wa.me/919904003445?text=Hello%20Millennium%20Automation"
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => trackContactClick("whatsapp")}
                          className="inline-flex items-center gap-2 bg-cyan-50 text-green-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200 rounded-full px-3 py-1"
                          aria-label="Chat on WhatsApp"
                        >
                          <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
                          <span className="text-sm">WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200 text-slate-900 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                      <p className="text-slate-700 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
