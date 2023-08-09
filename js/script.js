function initTabNav() {
  const clickImg = document.querySelectorAll(".js-tabmenu li");
  const descAnimais = document.querySelectorAll(".js-tabcontent section");

  if (clickImg.length && descAnimais.length) {
    descAnimais[0].classList.add("ativo");

    function activeTab(index) {
      descAnimais.forEach((section) => {
        section.classList.remove("ativo");
      });
      descAnimais[index].classList.add("ativo");
    }

    clickImg.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();

// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(name, age) {
  this.nome = name;
  this.idade = age;
  this.andar = function () {
    console.log(nome + " andou");
  };
}
