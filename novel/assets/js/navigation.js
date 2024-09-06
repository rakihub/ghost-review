export default function makeFooterNavi() {
  const footerNav = document.querySelector('.footer-nav');
  const footerMenu = document.querySelector('.gh-footer-menu');
  if (!footerMenu || !footerNav) return;

  const subItem = footerMenu.querySelector('.is-subitem');
  if (!subItem) return;

  function createNav(label, liElementArray) {
    const divElement = document.createElement('div');
    divElement.classList.add('footer-nested-menu');

    const spanElement = document.createElement('span');
    spanElement.textContent = label;

    const navElement = document.createElement('nav');

    const ulElement = document.createElement('ul');
    ulElement.classList.add('nav', 'secondary', 'submenu');

    liElementArray.forEach(liElement => {
      ulElement.appendChild(liElement);
    })

    navElement.appendChild(ulElement);
    divElement.appendChild(spanElement);
    divElement.appendChild(navElement);
    return divElement;
  }

  function getSpanAndLabel(liElement) {
    let linkElement = liElement.querySelector('a');
    let spanElement = linkElement.querySelector('span');
    return {span: spanElement, label: spanElement.textContent};
  }

  function createSpanPlaceholder() {
    let spanElement = document.createElement('span');
    spanElement.classList.add('span-placeholder');
    return spanElement;
  }

  const menuItems = footerMenu.querySelectorAll("ul li");

  const menuItemMap = new Map(); // parent menu item => [child menu item]

  let currentItemLabel = null;
  let subMenuItems = [];
  menuItems.forEach((item, index) => {
    if (!item.classList.contains('is-subitem')) {
      if (currentItemLabel !== null) {
        menuItemMap.set(currentItemLabel, subMenuItems);
      }

      currentItemLabel = getSpanAndLabel(item).label;
      subMenuItems = [];
    } else {
      const {span, label} = getSpanAndLabel(item);
      span.textContent = label.slice(1);

      subMenuItems.push(item);
    }
  });
  if (currentItemLabel !== null) {
    menuItemMap.set(currentItemLabel, subMenuItems);
  }

  footerMenu.remove();

  // To make the footer nav menu align right side of container
  if (menuItemMap.size < 4) {
    Array.from({length: 4 - menuItemMap.size}).forEach(() => footerNav.append(createSpanPlaceholder()));
  }

  menuItemMap.forEach((subItems, label) => {
    footerNav.append(createNav(label, subItems));
  });
};

export const makeHeaderNavi = () => {
  const mainElement = document.querySelector('.gh-main:has(.gh-loadmore)');
};
