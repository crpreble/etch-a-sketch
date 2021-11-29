const pix = document.createElement('div');
const gridBoard=document.querySelector('#grid-board')
pix.classList.add('pix');

function popGrid(size) {
      area= size*size;
      for (let i=0; i<area; i++){
          gridBoard.appendChild(document.createElement('div'));
      }
}

popGrid(16);
