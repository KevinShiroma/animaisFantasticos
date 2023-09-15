export default function initTabNav() {
  const clickImg = document.querySelectorAll("[data-tab='menu'] li");
  const descAnimais = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    descAnimais.forEach((section) => {
      section.classList.remove("ativo");
    });
    const animaDirecao = descAnimais[index].dataset.anime;
    descAnimais[index].classList.add("ativo", animaDirecao);
  }

  if (clickImg.length && descAnimais.length) {
    descAnimais[0].classList.add("ativo");

    clickImg.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
