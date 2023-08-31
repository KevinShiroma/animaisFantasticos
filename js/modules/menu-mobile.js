import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButtom = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menuButtom) {
    function openMenu(event) {
      menuList.classList.add("active");
      menuButtom.classList.add("active");
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuButtom.classList.remove("active");
      });
    }

    eventos.forEach((evento) => {
      menuButtom.addEventListener(evento, openMenu);
    });
  }
}
