const scriptURL = "https://script.google.com/macros/s/AKfycby2vZa5kJAGj6AowmtxhZUSXN-NYQOap5uFkk1Hhpvb3Yw2dLzKLEWd9pCjGpPOkFs3/exec";

const form = document.getElementById("application");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new URLSearchParams();
  formData.append("name", document.getElementById("name").value.trim());
  formData.append("minecraft", document.getElementById("minecraft").value.trim());
  formData.append("discord", document.getElementById("discord").value.trim());
  formData.append("email", document.getElementById("email").value.trim());

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData
      // ❌ NO headers
    });

    alert("✅ Application submitted successfully!");
    form.reset();

  } catch (error) {
    console.error(error);
    alert("❌ Something went wrong. Please try again later.");
  }
});
