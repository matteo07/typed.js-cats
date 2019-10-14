import Typed from "typed.js/src/typed";
import skills from './template/skills.html'
import bio from './template/bio.html'
import contact from './template/contact.html'
import spawnBall from './js/ball';
import './css/reset.css';
import './css/style.scss';

const TYPING_PROPS = {
  showCursor: false,
  typeSpeed: .1,
};

document.body.onload = () => {
  const showCats = !location.search.startsWith('?nocat');

  let skillsTitle = document.querySelector('#skills');
  let contactSection = document.querySelector('#contact');

  skillsTitle.style.display = 'none';
  contactSection.style.display = 'none';

  writeBio();

  function writeBio () {
    new Typed("#bio > p", {
      ...TYPING_PROPS,
      strings: [bio],
      onStringTyped: writeSkills
    });
  }

  function writeSkills () {
    skillsTitle.style.display = 'block';
    new Typed("#skills > div", {
      ...TYPING_PROPS,
      strings: [skills],
      onStringTyped: writeContact
    });
  }

  function writeContact() {
    contactSection.style.display = 'block';
    new Typed("#contact > div", {
      ...TYPING_PROPS,
      strings: [contact],
      onStringTyped: spawnCats,
    });
  }

  function spawnCats() {
    if(showCats) {
      spawnBall('ball1',
        () =>  spawnBall('ball2',
          () =>  spawnBall('ball3',
            () =>  spawnBall('ball4',
              () =>spawnBall('ball5', () => { location.href = '?nocat'; })))))
    }
  }
};