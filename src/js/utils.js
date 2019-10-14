export function htmlToElement(html) {
  let template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

export const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
