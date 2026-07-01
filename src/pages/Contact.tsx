import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { supabase } from "../services/supabase";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    text: "+254 717 976 448",
    link: "tel:+254717976448",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "info@ksvti.co.ke",
    link: "mailto:info@ksvti.co.ke",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Chat With Us",
    link: "https://wa.me/254717976448",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Mon - Fri: 8:00 AM - 5:00 PM",
    link: "#",
  },
];

export default function Contact() {
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    inquiry_type: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    setTimeout(() => {
      setSuccess(false);
    }, 8000);

    const { error } = await supabase.from("contact_messages").insert({
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      inquiry_type: form.inquiry_type || "General Inquiry",
      message: form.message,
    });

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSuccess(true);

    setForm({
      full_name: "",
      email: "",
      phone: "",
      inquiry_type: "",
      message: "",
    });
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out to Kahawa Sukari Vocational & Training Institute."
      />

      <section className="bg-white px-6 py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.link}
                className="rounded-lg bg-[#f5f5f5] p-7 text-center no-underline transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#2d1b5e] text-[#f5a623]">
                  <Icon size={26} />
                </div>

                <h3 className="mb-2 text-sm font-black uppercase text-[#2d1b5e]">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-600">{card.text}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-6 py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-md">
            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
              Send Us A Message
            </p>

            <h2 className="mb-6 text-3xl font-black uppercase text-[#2d1b5e]">
              Make an Inquiry
            </h2>

            {success && (
              <div className="mb-5 rounded-lg bg-green-100 p-4 text-sm font-semibold text-green-700">
                Message sent successfully. We will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
                placeholder="Full Name"
                required
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
                placeholder="Email Address"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
                placeholder="Phone Number"
              />

              <select
                name="inquiry_type"
                value={form.inquiry_type}
                onChange={handleChange}
                className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
              >
                <option value="">Select Inquiry Type</option>
                <option value="Course Inquiry">Course Inquiry</option>
                <option value="Admissions">Admissions</option>
                <option value="Fees Structure">Fees Structure</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="h-36 w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
                placeholder="Your Message"
                required
              />

              <button
                type="submit"
                disabled={saving || success}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 font-bold text-white transition-all duration-300 ${
                  success
                    ? "bg-green-600 cursor-default"
                    : "bg-[#2d1b5e] hover:bg-[#3d2680]"
                } ${saving ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {saving
                  ? "Sending..."
                  : success
                    ? "✓ Message Sent Successfully"
                    : "Send Message"}

                {!saving && <Send size={18} />}
              </button>

              {success && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold text-green-800">
                        Message Successfully Sent
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-green-700">
                        Thank you for contacting
                        <strong>
                          {" "}
                          Kahawa Sukari Vocational & Training Institute.
                        </strong>
                        <br />
                        <br />
                        We have successfully received your inquiry. A member of
                        our team will review your message and get back to you as
                        soon as possible through your phone number or email
                        address.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <iframe
              title="Kahawa Sukari Vocational & Training Institute Location"
              src="https://www.google.com/maps?q=Mizpah%20Plaza%20Kahawa%20Sukari%20opposite%20Quickmart%20Supermarket&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="p-7">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0 text-[#f5a623]" />
                <div>
                  <h3 className="mb-2 font-black uppercase text-[#2d1b5e]">
                    Visit Our Campus
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    Kahawa Sukari Estate, Mizpa Plaza, 4th Floor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
