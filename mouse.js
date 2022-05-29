AFRAME.registerComponent('listener', {
    init: function() {
      this.el.addEventListener('mouseenter', (e) => {
        this.el.children[0].setAttribute('visible', 'true');
      })
      this.el.addEventListener('mouseleave', (e) => {
        this.el.children[0].setAttribute('visible', 'false');
      })
    }
  })