var wrapper = document.getElementById('wrapper'),
    newDiv,
    colorSelector = document.getElementById('colorSelector'),
    colorArray = ['red', 'blue', 'black', 'yellow', 'brown', 'grey', 'cyan', 'fuchsia', 'burlywood', 'maroon', 'yellowgreen', 'orange', 'white'],
    colorHolder,
    isMouseDown = false,
    clearColor,
    colorWheel,
    colorDivs = document.getElementsByClassName('canvas'),
    body = document.getElementById('body');

colorSelector.style.width ='100%';
colorSelector.style.clear = 'both';
colorSelector.style.height = '50px';
colorSelector.style.clear = 'right';

wrapper.style.width = '100%';

for (var i = 0; i < colorArray.length; i++) {
  newDiv = document.createElement('div');
  newDiv.style.border = '1px solid black';
  newDiv.style.float = 'left';
  newDiv.style.height = '40px';
  newDiv.style.width = '40px';
  newDiv.style.borderRadius = '50%';
  newDiv.style.margin = '0px 5px 0px 0px';
  newDiv.className = 'selector';
  newDiv.id = colorArray[i];
  newDiv.style.backgroundColor = colorArray[i];
  colorSelector.appendChild(newDiv);
  newDiv.addEventListener('click', stealColor);
}

colorWheel = document.createElement('input');
colorWheel.style.border = '1px solid black';
colorWheel.style.float = 'right';
colorWheel.style.height = '40px';
colorWheel.style.width = '40px';
colorWheel.style.padding = '0px';
colorWheel.style.margin = '0px 5px 0px 0px';
colorWheel.style.backgroundColor = 'white';
colorWheel.type = 'color';
colorWheel.value = '#ff6666';
colorWheel.addEventListener('change', stealColorWheel);
colorSelector.appendChild(colorWheel);

clearColor = document.createElement('div');
clearColor.style.border = '1px solid black';
clearColor.style.float = 'right';
clearColor.style.height = '40px';
clearColor.style.width = '40px';
clearColor.style.borderRadius = '50%';
clearColor.style.margin = '0px 5px 0px 0px';
clearColor.addEventListener('click', clearAll);
colorSelector.appendChild(clearColor);

colorHolder = document.createElement('div');
colorHolder.style.border = '1px solid black';
colorHolder.style.float = 'right';
colorHolder.style.height = '40px';
colorHolder.style.width = '40px';
colorHolder.style.borderRadius = '50%';
colorHolder.style.margin = '0px 5px 0px 0px';
colorHolder.addEventListener('click', paintAll);
colorSelector.appendChild(colorHolder);

for (var i = 0; i < 1404; i++) {
  newDiv = document.createElement('div');
  newDiv.style.border = '1px solid rgba(0,0,0,.05)';
  newDiv.style.float = 'left';
  newDiv.style.height = '25px';
  newDiv.style.width = '25px';
  newDiv.className = 'canvas';
  newDiv.id = i;
  newDiv.addEventListener('click', pasteColor);
  wrapper.appendChild(newDiv);
}

wrapper.addEventListener('mouseover', dragOver);

body.addEventListener('mousedown', function() {
    isMouseDown = true;
  });

body.addEventListener('mouseup', function() {
  isMouseDown = false;
});

function dragOver(event) {
  if(isMouseDown === true){
    event.target.style.backgroundColor = colorHolder.style.backgroundColor;
  }
}

function clearAll(event) {
  for (var i = 0; i < colorDivs.length; i++) {
    colorDivs[i].style.backgroundColor = 'white';
  }
}

function paintAll(event) {
  for (var i = 0; i < colorDivs.length; i++) {
    colorDivs[i].style.backgroundColor = colorHolder.style.backgroundColor;
  }
}

function pasteColor(event) {
  event.target.style.backgroundColor = colorHolder.style.backgroundColor;
}

function stealColor(event) {
  colorHolder.style.backgroundColor = event.target.style.backgroundColor;
}

function stealColorWheel(event) {
  colorHolder.style.backgroundColor = event.target.value;
}
