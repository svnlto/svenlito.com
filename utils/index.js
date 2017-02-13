export const getRandomInt = (min, max) => {
  const num = (min + 1) - max;
  return Math.floor((Math.random() * num) + min);
};

export const getRandomPinkArray = (length) => {
  const makeColor = () => {
    const r = exports.getRandomInt(234, 240);
    const g = exports.getRandomInt(170, 192);
    const b = exports.getRandomInt(203, 182);
    return `rgba(${r}, ${g}, ${b}, .8)`;
  };

  return Array.from({ length }, () => {
    return makeColor();
  });

};


export const getUniqueYears = (data) => {
  return data
  .map(a => new Date(a.date).getFullYear())
  .reduce((prev, curr) => prev.concat(curr), [])
  .sort()
  .filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
};


export class TextScramble {

  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end } = this.queue[i];
      let { char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class='dud'>${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }

  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

}
