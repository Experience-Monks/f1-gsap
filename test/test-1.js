var f1Dom = require('./..');

document.body.innerHTML = '<div>' +
  '<div data-f1="item1">ITEM 1</div>' +
  '<div data-f1="item2">ITEM 2</div>' +
  '<div data-f1="item3">ITEM 3</div>' +
'</div>';

var ui = f1Dom({
  el: document.body,
  states: {
    out: {
      item1: {
        left: 10,
        opacity: 0.3,
        color: 'rgb(255, 0, 255)'
      },

      item2: {
        left: 40,
        opacity: 0.3,
        backgroundColor: 'rgb(255, 0, 255)'
      },

      item3: {
        transformOrigin: 'top left',
        x: 100,
        rotateZ: 90,
        scale: 2
      }
    },

    idle: {
      item1: {
        left: 40,
        opacity: 1,
        color: 'rgb(0, 0, 255)'
      },

      item2: {
        left: 10,
        opacity: 1,
        backgroundColor: 'rgb(255, 0, 0)'
      },

      item3: {
        transformOrigin: 'left top',
        x: 0,
        rotateZ: 0,
        scale: 1
      }
    },

    somethingThatDoesntExist: undefined
  },

  transitions: [
    { from: 'out', to: 'idle', bi: true }
  ]
})
.init('out')
.go('idle');

window.onclick = function() {

  if(ui.state === 'idle') {
    ui.go('out');  
  } else {
    ui.go('idle');
  }
};