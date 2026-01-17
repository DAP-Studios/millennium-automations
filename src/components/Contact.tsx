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
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag === "function") {
        gtag("event", "click", {
          event_category: "contact",
          event_label: label,
        });
      }

      // Google Tag Manager dataLayer
      const dl = (window as Window & { dataLayer?: unknown[] }).dataLayer;
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
    <section id="contact" className="relative min-h-screen w-full bg-cover bg-center text-white flex items-start md:items-center justify-center" style={{ backgroundImage: `url(${industrialBg})` }}>
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10 w-full flex flex-col py-4 sm:py-8 md:py-4 h-full md:h-auto">
        
        {/* Large Title at Top - Centered */}
        <div className="text-center mb-2 sm:mb-3 md:mb-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            Get In Touch
          </h1>
        </div>

        {/* Main Content Area - Two Columns */}
        <div className="flex-grow grid md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 max-w-7xl mx-auto w-full mb-2 md:mb-4">
          
          {/* Left Column: Contact Form */}
          <div className="h-full">
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl p-2 sm:p-4 md:p-6 h-full">
              <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 text-center border-b border-white/20 pb-1 md:pb-2">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-1.5 md:space-y-3" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-3">
                  <div>
                    <Label htmlFor="name" className="text-white mb-0.5 block font-medium text-xs md:text-sm">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Patel"
                      className="bg-white/20 text-white border border-white/30 placeholder:text-white/60 focus:ring-2 focus:ring-primary/50 h-7 md:h-9 rounded-md px-2 md:px-3 text-xs md:text-sm backdrop-blur-sm"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-0.5 block font-medium text-xs md:text-sm">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="bg-white/20 text-white border border-white/30 placeholder:text-white/60 focus:ring-2 focus:ring-primary/50 h-7 md:h-9 rounded-md px-2 md:px-3 text-xs md:text-sm backdrop-blur-sm"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="category" className="text-white mb-0.5 block font-medium text-xs md:text-sm">
                      Product Category
                    </Label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-primary/50 h-7 md:h-9 rounded-md px-2 md:px-3 text-xs md:text-sm backdrop-blur-sm"
                    >
                      <option value="" className="bg-slate-800 text-white">-- Select a category --</option>
                      <option value="drives" className="bg-slate-800 text-white">VFD</option>
                      <option value="servo" className="bg-slate-800 text-white">Servo</option>
                      <option value="interface" className="bg-slate-800 text-white">HMI</option>
                      <option value="control" className="bg-slate-800 text-white">PLC</option>
                      <option value="other" className="bg-slate-800 text-white">Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="message" className="text-white mb-0.5 block font-medium text-xs md:text-sm">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project"
                      className="bg-white/20 text-white border border-white/30 placeholder:text-white/60 focus:ring-2 focus:ring-primary/50 resize-none rounded-md px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-bold shadow-lg transition-all duration-200 h-7 md:h-10 text-xs md:text-sm"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info - Four Stacked Boxes */}
          <div className="flex flex-col gap-1.5 sm:gap-3 md:gap-4 h-full">

            {/* Box 1: Map Address */}
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl p-2 sm:p-3 md:p-4 flex-1">
              <h3 className="text-xs sm:text-base md:text-lg font-bold text-white mb-0.5 md:mb-2 text-center border-b border-white/20 pb-0.5 md:pb-1">Map Address</h3>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-primary/30 rounded-lg p-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <a
                    href="https://www.google.com/maps/place/9W7F%2B3FR,+Silvasa+Rd,+near+Via+Char+Rasta+Road,+Phase+2,+GIDC,+Vapi,+Gujarat+396195/@21.1628125,72.8734375,17z"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackContactClick("google_maps")}
                    className="text-white/90 text-xs sm:text-sm leading-relaxed hover:text-primary hover:underline block"
                  >
                    9W7F+3FR, Silvasa Rd, near Via Char Rasta Road, Phase 2, GIDC, Vapi, Gujarat 396195
                  </a>
                </div>
              </div>
            </div>

            {/* Box 2: Email & Phone - Side by side */}
            <div className="flex gap-1 sm:gap-2 flex-1">
              {/* Left: Email - 60% width */}
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl p-2 sm:p-3 md:p-4 w-3/5">
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white mb-0.5 md:mb-2 text-center border-b border-white/20 pb-0.5 md:pb-1">Email</h3>
                <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                  <div className="bg-primary/30 rounded-lg p-1 md:p-2 flex-shrink-0">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <a href="mailto:millenniumautomationsystem@gmail.com" className="text-white/90 hover:text-primary hover:underline text-xs md:text-sm block break-all">
                      millenniumautomationsystem@gmail.com
                    </a>
                    <a href="mailto:info.millenniumautomation@gmail.com" className="text-white/90 hover:text-primary hover:underline text-xs md:text-sm block break-all">
                      info.millenniumautomation@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Phone - 40% width */}
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl p-2 sm:p-3 md:p-4 w-2/5">
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-white mb-0.5 md:mb-2 text-center border-b border-white/20 pb-0.5 md:pb-1">Phone No</h3>
                <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                  <div className="bg-primary/30 rounded-lg p-1 md:p-2 flex-shrink-0">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <a
                      href="tel:+919904003445"
                      onClick={() => trackContactClick("phone")}
                      className="text-white/90 hover:text-primary text-xs md:text-sm block"
                    >
                      +91 9904003445
                    </a>
                    <a
                      href="tel:+919974253445"
                      onClick={() => trackContactClick("phone")}
                      className="text-white/90 hover:text-primary text-xs md:text-sm block"
                    >
                      +91 99742 53445
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 4: Working Hr */}
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl p-2 sm:p-3 md:p-4 flex-1">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 md:mb-2 text-center border-b border-white/20 pb-1">Working Hr</h3>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="bg-primary/30 rounded-lg p-1.5 md:p-2">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white/90 text-xs md:text-sm">Monday - Saturday</p>
                  <p className="text-white font-semibold text-sm md:text-base">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Two Small Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto w-full pb-6">

          {/* Left Bottom Box: Copyright Info */}
          <div className="p-4 sm:p-5">
            <div className="text-left">
              <p className="text-white/90 text-l font-semibold">
                &copy; 2025 Millennium Automation System - All Rights Reserved
              </p>
            </div>
          </div>

          {/* Right Bottom Box: Developer Info */}
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 text-right ml-auto">
  <img
    src="dap.png"
    alt="DAP Tech"
    className="h-7 sm:h-8 lg:h-10 opacity-90"
  />

  <div className="text-right">
    <p className="text-xm sm:text-sm mb-0.5 sm:mb-1">
      Website by{" "}
      <a 
        href="https://thedap.live"
        className="text-[#c60000] font-bold">
        DAP Tech Solutions
      </a>
    </p>

    <p className="text-[10px] sm:text-xs lg:text-sm">
      Deep Parmar{" "}
      <a
        href="tel:+919725362234"
        className="text-[#025dcd] font-bold hover:underline transition-colors"
      >
        +91 9725362234
      </a>
    </p>
  </div>
</div>

        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919904003445?text=Hello%20Millennium%20Automation"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackContactClick("floating_whatsapp")}
          className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          {/* Glowing Ring Animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-75 group-hover:opacity-100"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-50"></div>
          
          {/* WhatsApp Icon */}
          <svg className="relative z-10 w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690"/>
          </svg>
        </a>
      </div>
    </section>  
  );
};

export default Contact;
 