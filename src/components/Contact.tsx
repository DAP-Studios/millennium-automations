import { useState } from "react";
import { Button } from "@/components/ui/button";
import industrialBg from "@/assets/hero-3.jpg";
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
    <section id="contact" className="relative h-screen w-full bg-cover bg-center overflow-hidden snap-start snap-always text-white flex items-center justify-center" style={{ backgroundImage: `url(${industrialBg})` }}>
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col justify-center py-4">
        <div className="text-center mb-3 sm:mb-4 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-2xl">Get In Touch</h2>
        </div>

        <div className="max-w-6xl mx-auto flex-1 flex flex-col">
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 items-start flex-1">
            {/* Left: Contact Form */}
            <div>
              <Card className="bg-white/95 backdrop-blur-sm text-slate-900 border border-white/30 shadow-lg h-full">
                <CardContent className="p-4 sm:p-5">
                  <form onSubmit={handleSubmit} className="space-y-3" aria-label="Contact form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="name" className="text-slate-700 mb-1 block font-medium text-xs">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Patel"
                          className="bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 h-9 rounded-md px-3 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-slate-700 mb-1 block font-medium text-xs">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 h-9 rounded-md px-3 text-sm"
                          required
                        />
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="category" className="text-slate-700 mb-1 block font-medium text-xs">
                          Product Category
                        </Label>
                        <select
                          id="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 h-9 rounded-md px-3 text-sm"
                        >
                          <option value="">-- Select a category --</option>
                          <option value="drives">VFD</option>
                          <option value="servo">Servo</option>
                          <option value="interface">HMI</option>
                          <option value="control">PLC</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="message" className="text-slate-700 mb-1 block font-medium text-xs">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project"
                          className="bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 resize-none rounded-md px-3 py-2 text-sm"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-white hover:bg-primary/90 font-bold shadow-md transition-all duration-200 h-9"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right: Contact Info (cards stacked) */}
            <div className="space-y-2 sm:space-y-3 h-full flex flex-col">
            {/* Right: Contact Info (cards stacked) */}
            <div className="space-y-2 sm:space-y-3 h-full flex flex-col">
              <Card className="bg-white/95 backdrop-blur-sm border border-white/30 text-slate-900 shadow-sm flex-1">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1">Office Address</h3>
                      <a
                        href="https://www.google.com/maps/place/9W7F+3FR,+Silvasa+Rd,+near+Via+Char+Rasta+Road,+Phase+2,+GIDC,+Vapi,+Gujarat+396195"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => trackContactClick("google_maps")}
                        className="text-slate-700 text-xs leading-relaxed hover:text-primary hover:underline"
                      >
                        6A, 1st Floor, Globe Chamber, Near V.I.A Char Rasta, G.I.D.C., Vapi - 396195, Gujarat
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border border-white/30 text-slate-900 shadow-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1">Email</h3>
                      <p className="text-slate-700 text-xs">
                        <a href="mailto:millenniumautomationsystem@gmail.com" className="hover:underline text-primary">millenniumautomationsystem@gmail.com</a>
                        <a href="mailto:info.millenniumautomation@gmail.com" className="hover:underline text-primary">info.millenniumautomation@gmail.com</a>
                     
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border border-white/30 text-slate-900 shadow-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold mb-1">Phone / WhatsApp</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href="tel:+919904003445"
                          onClick={() => trackContactClick("phone")}
                          className="inline-flex items-center gap-1 text-slate-700 hover:text-primary text-xs"
                        >
                          <Phone className="w-3 h-3 text-primary" />
                          <span>+91 9904003445</span>
                          <span>+91 99742 53445</span>
                        </a>

                        <a
                          href="https://wa.me/919904003445?text=Hello%20Millennium%20Automation"
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => trackContactClick("whatsapp")}
                          className="inline-flex items-center gap-1 bg-green-50 text-green-700 hover:bg-green-100 rounded-full px-2 py-1 text-xs"
                        >
                          <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border border-white/30 text-slate-900 shadow-sm">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1">Business Hours</h3>
                      <p className="text-slate-700 text-xs">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3">
            <div className="text-center md:text-left">
              <p className="text-[10px] sm:text-xs text-white/80">
                &copy; 2024 Millennium Automation System. All Rights Reserved.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="dap.png"
                alt="DAP Tech"
                className="h-6 sm:h-7 opacity-90"
              />
              <div className="text-center sm:text-left">
                <p className="text-[10px] sm:text-xs text-white/80">
                  Website by{" "}
                  <span className="text-white font-bold">
                    DAP Tech Solutions
                  </span>
                </p>
                <p className="text-[9px] sm:text-[10px] text-white/70">
                  Created by Deep Parmar{" "}
                  <a
                    href="tel:+919725362234"
                    className="text-white font-bold hover:underline"
                  >
                    +91 9725362234
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>  
    </section>
  );
};

export default Contact;
