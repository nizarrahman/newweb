// header aktive

const header = document.querySelector(".header");
document.querySelector(".tombol").onclick = () => {
  header.classList.toggle("active");
};

const tombol = document.querySelector(".tombol");

document.addEventListener("click", function (e) {
  if (!tombol.contains(e.target) && !header.contains(e.target)) {
    header.classList.remove("active");
  }
});

// menu list aktive
const listA = document.querySelectorAll(".innermenu a");

const removeNavbar = () => {
  listA.forEach((list) => {
    list.classList.remove("navbar");
  });
};

const addNavbar = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let currentDot = document.querySelector(`.innermenu a[href='#${entry.target.id}']`);
      removeNavbar();
      currentDot.classList.add("navbar");
    }
  });
};

const options = {
  threshold: 0.8,
};
const observer = new IntersectionObserver(addNavbar, options);
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  observer.observe(section);
});

// emailJs
function sendMail() {
  const pesan = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };
  const form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.sendMail();
  });

  const serviceID = "service_pjtwy2l";
  const templateID = "template_eerba3a";

  emailjs
    .send(serviceID, templateID, pesan)
    .then((res) => {
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
      console.log(res);
      alert("Pesan Kamu telah Terkirim.");
    })
    .catch((err) => console.log(err));
}
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMail();
});
