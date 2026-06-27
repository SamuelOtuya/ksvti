import PageHeader from "../components/common/PageHeader";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export default function Application() {
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const [programmes, setProgrammes] = useState<{ id: string; title: string }[]>(
    [],
  );

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    programme: "",
    qualification: "",
    preferred_intake: "",
    message: "",
  });

  useEffect(() => {
    fetchProgrammes();
  }, []);

  async function fetchProgrammes() {
    const { data, error } = await supabase
      .from("programmes")
      .select("id,title")
      .eq("status", "published")
      .order("title", { ascending: true });

    if (!error) {
      setProgrammes(data || []);
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);
    setSuccess(false);

    const { error } = await supabase.from("applications").insert(form);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 8000);

    setForm({
      full_name: "",
      phone: "",
      email: "",
      programme: "",
      qualification: "",
      preferred_intake: "",
      message: "",
    });
  }

  return (
    <>
      <PageHeader
        title="Online Application"
        subtitle="Apply online to join Kahawa Sukari Vocational & Training Institute."
      />

      <section className="bg-[#f5f5f5] px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
              Start Your Journey
            </p>

            <h2 className="text-3xl font-black uppercase text-[#2d1b5e] lg:text-4xl">
              Application Form
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-8 shadow-md lg:p-12"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input
                label="Full Name"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
              />

              <Input
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />

              <div>
                <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
                  Programme Applying For
                </label>
                <select
                  name="programme"
                  value={form.programme}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
                  required
                >
                  <option value="">Select Programme</option>

                  {programmes.map((programme) => (
                    <option key={programme.id} value={programme.title}>
                      {programme.title}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="KCSE Grade / Qualification"
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
                placeholder="e.g. C-, D+, KCPE, N/A"
              />

              <Input
                label="Preferred Intake"
                name="preferred_intake"
                value={form.preferred_intake}
                onChange={handleChange}
                placeholder="e.g. January, May, September"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
                Message / Additional Information
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="h-36 w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
                placeholder="Write any additional details here..."
              />
            </div>

            <button
              type="submit"
              disabled={saving || success}
              className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 font-bold text-white transition-all duration-300 ${
                success
                  ? "cursor-default bg-green-600"
                  : "bg-[#2d1b5e] hover:bg-[#3d2680]"
              } ${saving ? "cursor-not-allowed opacity-70" : ""}`}
            >
              {saving
                ? "Submitting..."
                : success
                  ? "✓ Application Submitted Successfully"
                  : "Submit Application"}

              {!saving && <Send size={18} />}
            </button>

            {success && (
              <div className="mt-5 rounded-lg border border-green-200 bg-green-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold text-green-800">
                      Application Successfully Submitted
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-green-700">
                      Thank you for applying to
                      <strong>
                        {" "}
                        Kahawa Sukari Vocational & Training Institute.
                      </strong>
                      <br />
                      <br />
                      We have received your application. Our admissions office
                      will review your details and contact you shortly through
                      your phone number or email address.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded border border-gray-200 p-4 outline-none focus:border-[#f5a623]"
      />
    </div>
  );
}
