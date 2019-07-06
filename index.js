const line = 6;
const column = 6;
const winner = Math.floor(Math.random() * line * column);
console.log('winner:' +  winner);
window.onload = function() {
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= line; j++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.classList.add('flex');
      if (i*j == winner) {
        div.dataset.result = 'win';
      } else {
        div.dataset.result = 'lose';
      }
      div.addEventListener('click', function(){
        if (div.dataset.result == 'win') {
          div.classList.add('win');
        } else {
          div.classList.add('lose');
        }
      })

      document.body.appendChild(div);
    }
    const div2 = document.createElement('div');
    document.body.appendChild(div2);
  }
}
