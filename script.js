
const gridBoard=document.querySelector('#grid-board')


function popGrid(size) {
      while(gridBoard.firstChild) {
          gridBoard.removeChild(gridBoard.firstChild);
      }
      gridBoard.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr`)
      area= size*size;
      for (let i=0; i<area; i++){
          gridBoard.appendChild(document.createElement('div'));
          document.getElementById('grid-board').lastChild.classList.add('pix');
          /*document.getElementById('grid-board').lastChild.addEventListener('onmouseover');*/
          const pix = gridBoard.querySelectorAll('div');
          pix.forEach((div) => {
              div.addEventListener('mouseover', (e) =>{
                  e.target.style.background ='white';
                })
              });
      }
}

popGrid(16);
const pix = gridBoard.querySelectorAll('div');
pix.forEach((div) => {
    div.addEventListener('mouseover', (e) =>{
        e.target.style.background ='white';
    })
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    let scale=prompt('enter number of rows:');
    popGrid(scale);
})