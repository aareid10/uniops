module.exports = (document) => {

  const unqry = {
    create: document.createElement.bind(document),
    all: document.querySelectorAll.bind(document),
    one: document.querySelector.bind(document),
    id: document.getElementById.bind(document),
    class: document.getElementsByClassName.bind(document),
    tag: document.getElementsByTagName.bind(document)
  }

  return unqry;
}
