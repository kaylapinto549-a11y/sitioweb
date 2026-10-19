const PHONE = "3001640580";
function toWhatsAppLink(message) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
function setWhatsButtons() {
  const baseMsg = "Hola Boutique Kayla 👋\nQuiero hacer un pedido. ¿Me ayudas con disponibilidad y precios?";
  document.querySelectorAll("#whatsBtn, #whatsBtn2, #whatsMain").forEach(a => { if (a) a.href = toWhatsAppLink(baseMsg); });
}
const products = {
  p1: { title: "Vestido Corto Elegante", price: "Desde $28.900", img: "img/producto1.jpeg", desc: "Vestido corto elegante, varios colores disponibles." },
  p2: { title: "Conjunto Nike Falda", price: "Desde $34.900", img: "img/producto2.jpeg", desc: "Conjunto deportivo con falda tableada." },
  p3: { title: "Sueteres Básicos", price: "Desde $29.900", img: "img/producto3.jpeg", desc: "Sueteres básicos de 4 colores diferentes." },
  p4: { title: "Remera Los Angeles", price: "Desde $15.900", img: "img/producto4.jpeg", desc: "Remera blanca Los Angeles." },
  p5: { title: "Conjunto Falda Cuadros", price: "Desde $39.900", img: "img/producto5.jpeg", desc: "Conjunto falda a cuadros + top negro." },
  p6: { title: "Jean Bota Ancha", price: "Desde $45.900", img: "img/producto6.jpeg", desc: "Jean bota ancha en tendencia." },
  p7: { title: "Chaqueta 96 LA", price: "Desde $38.900", img: "img/producto7.jpeg", desc: "Chaqueta 96 Los Angeles oversize." },
  p8: { title: "Vestido Acampanado", price: "Desde $32.000", img: "img/producto8.jpeg", desc: "Vestido acampanado, colores variados. No es legging." },
  p9: { title: "Sueter Rojo", price: "Desde $29.900", img: "img/producto9.jpeg", desc: "Sueter rojo manga larga, calientito." },
  p10:{ title: "Conjunto California", price: "Desde $36.900", img: "img/producto10.jpeg", desc: "Conjunto falda + sueter California." },
  p11:{ title: "Vestido Noche", price: "Desde $42.000", img: "img/producto11.jpeg", desc: "Vestido para noche, elegante." },
  p12:{ title: "Vestido Casual", price: "Desde $36.900", img: "img/producto12.jpeg", desc: "Vestido casual para el día a día." },
};

// El resto del código igual...
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalWhatsBtn = document.getElementById("modalWhatsBtn");
let currentProductId = null;
function openModal(productId) {
  const p = products[productId]; if (!p) return;
  currentProductId = productId;
  modalImg.src = p.img; modalTitle.textContent = p.title;
  modalPrice.textContent = p.price; modalDesc.textContent = p.desc;
  modal.classList.add("show"); modal.setAttribute("aria-hidden", "false");
}
function closeModal() { modal.classList.remove("show"); modal.setAttribute("aria-hidden", "true"); currentProductId = null; }
document.addEventListener("click", (e) => { const btn = e.target.closest(".product-card"); if (btn) openModal(btn.getAttribute("data-id")); });
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
modalWhatsBtn.addEventListener("click", () => {
  const p = products[currentProductId];
  const msg = `Hola Boutique Kayla 👋\nQuiero pedir: ${p.title}\n${p.price}\n¿Me confirmas disponibilidad y envío?`;
  window.open(toWhatsAppLink(msg), "_blank", "noopener");
});
const filterButtons = document.querySelectorAll(".filter");
const productGrid = document.getElementById("productGrid");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active")); btn.classList.add("active");
    const cat = btn.getAttribute("data-filter");
    productGrid.querySelectorAll(".product").forEach(card => {
      const pcat = card.getAttribute("data-cat");
      card.style.display = (cat === "all" || pcat === cat) ? "" : "none";
    });
  });
});
document.getElementById("sendFormBtn").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const producto = document.getElementById("producto").value.trim();
  const talla = document.getElementById("talla").value.trim();
  const msg = `Hola Boutique Kayla 👋\n${nombre ? `Soy ${nombre}.\n` : ""}${producto ? `Producto: ${producto}\n` : ""}${talla ? `Talla/Color: ${talla}\n` : ""}Quiero coordinar envío nacional.`;
  window.open(toWhatsAppLink(msg), "_blank", "noopener");
});
document.getElementById("year").textContent = new Date().getFullYear();
setWhatsButtons();
// Menú mobile simple (solo nave)
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.style.display === "flex";
    nav.style.display = isOpen ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "72px";
    nav.style.right = "18px";
    nav.style.background = "rgba(7,8,22,.92)";
    nav.style.border = "1px solid rgba(255,255,255,.12)";
    nav.style.borderRadius = "16px";
    nav.style.padding = "10px";
    nav.style.gap = "6px";
    nav.style.zIndex = "60";
  });
}
