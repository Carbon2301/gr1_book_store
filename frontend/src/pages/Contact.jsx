import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Message sent!',
      text: 'Thank you for contacting us. We will get back to you soon.',
      confirmButtonColor: '#FFD600',
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>
        If you have any questions, feedback, or need support, please contact us using the form below or via email.
      </p>
      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded px-4 py-2"
          required
        />
        <textarea
          placeholder="Your Message"
          className="border rounded px-4 py-2"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-primary text-black px-6 py-2 rounded hover:bg-yellow-400 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact; 