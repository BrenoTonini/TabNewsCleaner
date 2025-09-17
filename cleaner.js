const filtros = ["[pitch]", "🚀"];

function esconderItens() {
  const links = document.querySelectorAll("li.Box-sc-g0xbh4-0 a");

  links.forEach(link => {
    const texto = link.textContent.toLowerCase();

    if (filtros.some(filtro => texto.includes(filtro.toLowerCase()))) {
      const li = link.closest("li");
      if (li) {
        li.style.display = "none";
      }
    }
  });
}

esconderItens();

const observer = new MutationObserver(esconderItens);
observer.observe(document.body, { childList: true, subtree: true });
