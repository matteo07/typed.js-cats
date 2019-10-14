export function htmlToElement(html) {
  let template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

export const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
