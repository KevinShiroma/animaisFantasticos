import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.activeLCass = "active";

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeLCass);
    this.menuButton.classList.add(this.activeLCass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeLCass);
      this.menuButton.classList.remove(this.activeLCass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
