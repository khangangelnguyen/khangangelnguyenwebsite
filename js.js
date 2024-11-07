space = "&nbsp;";
enter = "<br>";
hr = "<hr>";

function addHoverEffect(triggerId, targetId, imgSrc, videoSrc, textId1, textId3, whiteId1, whiteId2) {
  const trigger = document.getElementById(triggerId);
  const target = document.getElementById(targetId);
  const text1 = document.getElementById(textId1);
  const text3 = document.getElementById(textId3);
  const white1 = document.getElementById(whiteId1);
  const white2 = document.getElementById(whiteId2);

  trigger.addEventListener('mouseenter', function() {
      // Swap image with video
      const img = target.querySelector('img');
      if (img) {
          const video = document.createElement('video');
          video.type = "video/webm";
          video.src = videoSrc;
          video.autoplay = true;
          video.loop = true;
          video.muted = true;
          target.replaceChild(video, img);
      }

      // Hide text
      if (text1) {
          text1.style.display = 'none';
      }
      if (text3) {
          text3.style.display = 'none';
      }

      // Hide white elements
      if (white1) {
          white1.style.display = 'none';
      }
      if (white2) {
          white2.style.display = 'none';
      }
  });

  trigger.addEventListener('mouseleave', function() {
      // Swap video back to image
      const video = target.querySelector('video');
      if (video) {
          const img = document.createElement('img');
          img.src = imgSrc;
          target.replaceChild(img, video);
      }

      // Show text
      if (text1) {
          text1.style.display = 'flex';
      }
      if (text3) {
          text3.style.display = 'flex';
      }

      // Show white elements
      if (white1) {
          white1.style.display = 'block';
      }
      if (white2) {
          white2.style.display = 'block';
      }
  });
}

// Handling each div individually with additional white elements
addHoverEffect('post1a', 'post1b', '/reel1pic.jpg', '/reel1video.webm', 'post1atransparent1', 'post1atransparent3', 'post1awhite1', 'post1awhite2');
addHoverEffect('post2a', 'post2b', '/reel2pic.jpg', '/reel2video.webm', 'post2atransparent1', 'post2atransparent3', 'post2awhite1', 'post2awhite2');
addHoverEffect('post3a', 'post3b', '/reel3pic.jpg', '/reel3video.webm', 'post3atransparent1', 'post3atransparent3', 'post3awhite1', 'post3awhite2');
addHoverEffect('post4a', 'post4b', '/reel4pic.jpg', '/reel4video.webm', 'post4atransparent1', 'post4atransparent3', 'post4awhite1', 'post4awhite2');
addHoverEffect('post5a', 'post5b', '/reel5pic.jpg', '/reel5video.webm', 'post5atransparent1', 'post5atransparent3', 'post5awhite1', 'post5awhite2');
addHoverEffect('post6a', 'post6b', '/reel6pic.jpg', '/reel6video.webm', 'post6atransparent1', 'post6atransparent3', 'post6awhite1', 'post6awhite2');

var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: (window.innerWidth / 2),
  endY: (window.innerHeight / 2),
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('.cursor-dot'),
  $outline: document.querySelector('.cursor-dot-outline'),

  init: function() {
      // Set up element sizes
      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;

      this.setupEventListeners();
      this.animateDotOutline();
  },

  setupEventListeners: function() {
      var self = this;

      // Anchor hovering
      document.querySelectorAll('a').forEach(function(el) {
          el.addEventListener('mouseover', function() {
              self.cursorEnlarged = true;
              self.toggleCursorSize();
          });
          el.addEventListener('mouseout', function() {
              self.cursorEnlarged = false;
              self.toggleCursorSize();
          });
      });

      // Click events
      document.addEventListener('mousedown', function() {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
      });
      document.addEventListener('mouseup', function() {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
      });

      document.addEventListener('mousemove', function(e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + 'px';
          self.$dot.style.left = self.endX + 'px';
      });

      // Hide/show cursor
      document.addEventListener('mouseenter', function(e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
      });

      document.addEventListener('mouseleave', function(e) {
          self.cursorVisible = false;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
      });

      // Change cursor background color when hovering over specific posts
      ['post1a', 'post2a', 'post3a', 'post4a', 'post5a', 'post6a'].forEach(function(id) {
          var element = document.getElementById(id);
          if (element) {
              element.addEventListener('mouseover', function() {
                  self.$dot.style.backgroundColor = 'white';
                  self.$outline.style.backgroundColor = 'white';
              });
              element.addEventListener('mouseout', function() {
                  self.$dot.style.backgroundColor = ''; // Reset to default
                  self.$outline.style.backgroundColor = ''; // Reset to default
              });
          }
      });
  },

  animateDotOutline: function() {
      var self = this;

      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$outline.style.top = self._y + 'px';
      self.$outline.style.left = self._x + 'px';

      requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function() {
      var self = this;

      if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
      }
  },

  toggleCursorVisibility: function() {
      var self = this;

      if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
      } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
      }
  }
}

cursor.init();
