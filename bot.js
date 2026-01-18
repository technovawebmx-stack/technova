document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("chatbot-btn");
  const chat = document.getElementById("chatbot");
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");

  let step = 0;

  btn.addEventListener("click", () => {
    chat.style.display = chat.style.display === "none" ? "flex" : "none";

    if (step === 0) {
      bot("👋 Hola, soy tu asesor web. ¿Tienes un negocio o proyecto?");
      step = 1;
    }
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      user(input.value);
      flow(input.value.toLowerCase());
      input.value = "";
    }
  });

  function bot(text) {
    messages.innerHTML += `<div><b>Asesor:</b> ${text}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }

  function user(text) {
    messages.innerHTML += `<div><b>Tú:</b> ${text}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }

  function flow(msg) {
    if (step === 1) {
      bot("Perfecto. ¿Ya tienes página web?");
      step = 2;
    } 
    else if (step === 2) {
      bot("¿Buscas más clientes o solo presencia en internet?");
      step = 3;
    } 
    else if (step === 3) {
      bot("Puedo ayudarte con una web optimizada para ventas. ¿Quieres ver precios o hablar directo?");
      step = 4;
    } 
    else {
      bot("👉 Escríbeme directo aquí: https://wa.me/521XXXXXXXXXX");
    }
  }
});
