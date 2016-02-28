var TweenMax = require('gsap');

module.exports = function(target, state) {
  TweenMax.set(target, {css: state});
};