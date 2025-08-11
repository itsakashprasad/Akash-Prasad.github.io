document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Show loading alert instantly
    Swal.fire({
        title: "Sending...",
        text: "Please wait while we process your message.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });


    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://contactapi-ywrt.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Thanks for contacting me! I will get back to you soon.",
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please check your internet connection and try again.",
      });
    }
  });
});
