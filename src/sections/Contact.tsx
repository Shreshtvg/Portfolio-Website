import { useState, FormEvent, ChangeEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Github, Trophy, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import emailjs from "@emailjs/browser";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { personal } = portfolioData;

  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("shreshtvg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      nextErrors.name = "Please specify your name";
      isValid = false;
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please specify an email address";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please specify a valid email syntax";
      isValid = false;
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Please specify a message subject";
      isValid = false;
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message payload cannot be empty";
      isValid = false;
    }

    setErrors(nextErrors);
    return isValid;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setIsSubmitting(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSubmitSuccess(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};

  const contactMethods = [
    {
      label: "Direct Email",
      value: "shreshtvg@gmail.com",
      link: personal.socials.email,
      icon: <Mail className="text-[#FF6B4A]" size={20} />,
      face: "shreshtvg@gmail.com",
      type: "email"
    },
    {
      label: "LinkedIn Professional",
      value: "linkedin.com/in/shresht-v-g-506465241",
      link: personal.socials.linkedin,
      icon: <Linkedin className="text-[#FF8C69]" size={20} />,
      face: "Linkedin",
      type: "linkedin"
    },
    {
      label: "GitHub Repositories",
      value: "github.com/shreshtvg",
      link: personal.socials.github,
      icon: <Github className="text-[#FFA07A]" size={20} />,
      face: "GitHub",
      type: "github"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden md:px-12 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#FF6B4A] to-[#FF8C69] mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="font-heading text-2xl font-bold text-white tracking-tight mb-2">
              Let's create something scalability-first.
            </h3>
            <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed mb-6">
              I am actively looking for Full time Opportunities in top technology teams, backend infrastructures, and robust fullstack projects. Drop a query or direct note!
            </p>

            {/* Structured Contact Anchors */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                if (method.type === "email") {
                  return (
                    <button
                      type="button"
                      key={method.type}
                      onClick={handleCopyEmail}
                      className="p-5 w-full rounded-2xl bg-[#111827]/60 border border-white/5 flex items-center justify-between gap-4 hover:border-[#FF6B4A]/20 transition-all duration-300 group text-left cursor-pointer"
                      title="Click to copy email"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#0B1220] border border-white/5 flex items-center justify-center">
                          {method.icon}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-medium text-white group-hover:text-[#FF6B4A] transition-colors">{method.face}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#FF6B4A]/50 group-hover:text-[#FF6B4A] transition-colors font-bold select-none">&lambda;</span>
                    </button>
                  );
                }

                return (
                  <a
                    key={method.type}
                    href={method.link}
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="p-5 rounded-2xl bg-[#111827]/60 border border-white/5 flex items-center justify-between gap-4 hover:border-[#FF6B4A]/20 hover:scale-[1.01] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0B1220] border border-white/5 flex items-center justify-center">
                        {method.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-medium text-white group-hover:text-[#FF6B4A] transition-colors">{method.face}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#FF6B4A]/50 group-hover:text-[#FF6B4A] transition-colors font-bold group-hover:translate-x-0.5 transition-transform">&lambda;</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side: Form Container */}
          <div className="lg:col-span-7 relative">
            <div className="p-8 md:p-10 bg-[#111827] rounded-3xl border border-white/5 shadow-2xl relative glow-card">
              
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 size={54} className="text-[#FF6B4A] mb-4" />
                    <h4 className="font-heading text-xl font-bold text-white mb-2">Email Client Opened!</h4>
                    <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed">
                      We've preloaded a message package inside your default email client. Just hit "Send" in your mail system to complete the delivery to <strong>shreshtvg@gmail.com</strong>!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div className="flex flex-col">
                        <label className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 font-semibold">Your Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            placeholder="Elon Musk"
                            className={`w-full px-4 py-3 bg-[#0B1220] border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B4A]/50 focus:ring-1 focus:ring-[#FF6B4A]/10 transition-all ${
                              errors.name ? "border-red-500/40" : "border-white/5"
                            }`}
                          />
                          {errors.name && (
                            <span className="flex items-center gap-1 mt-1.5 font-mono text-[10px] text-red-400">
                              <AlertCircle size={10} />
                              {errors.name}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col">
                        <label className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 font-semibold">Email Envelope</label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                            placeholder="elonmusk@gmail.com"
                            className={`w-full px-4 py-3 bg-[#0B1220] border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B4A]/50 focus:ring-1 focus:ring-[#FF6B4A]/10 transition-all ${
                              errors.email ? "border-red-500/40" : "border-white/5"
                            }`}
                          />
                          {errors.email && (
                            <span className="flex items-center gap-1 mt-1.5 font-mono text-[10px] text-red-400">
                              <AlertCircle size={10} />
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Subject input */}
                    <div className="flex flex-col">
                      <label className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 font-semibold">Subject Context</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleInputChange}
                          placeholder="We have an opportunity for you at SpaceX"
                          className={`w-full px-4 py-3 bg-[#0B1220] border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B4A]/50 focus:ring-1 focus:ring-[#FF6B4A]/10 transition-all ${
                            errors.subject ? "border-red-500/40" : "border-white/5"
                          }`}
                        />
                        {errors.subject && (
                          <span className="flex items-center gap-1 mt-1.5 font-mono text-[10px] text-red-400">
                            <AlertCircle size={10} />
                            {errors.subject}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col">
                      <label className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2 font-semibold">Payload Message</label>
                      <div className="relative">
                        <textarea
                          rows={5}
                          name="message"
                          value={form.message}
                          onChange={handleInputChange}
                          placeholder="Feel free to add details..."
                          className={`w-full px-4 py-3 bg-[#0B1220] border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF6B4A]/50 focus:ring-1 focus:ring-[#FF6B4A]/10 transition-all resize-none ${
                            errors.message ? "border-red-500/40" : "border-white/5"
                          }`}
                        />
                        {errors.message && (
                          <span className="flex items-center gap-1 mt-1.5 font-mono text-[10px] text-red-400">
                            <AlertCircle size={10} />
                            {errors.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Button trigger */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 h-12 rounded-xl bg-[#FF6B4A] hover:bg-[#FF8C69] hover:shadow-lg hover:shadow-[#FF6B4A]/15 text-[#0B1220] font-heading font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-[#0B1220] border-t-transparent animate-spin" />
                          <span>Delivering...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Dispatch Message</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
