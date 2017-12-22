const pressed = [];
const secret = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secret.length - 1, pressed.length - secret.length);
  console.log(pressed);
  if(pressed === secret) {
    cornify_add();
  }
});
