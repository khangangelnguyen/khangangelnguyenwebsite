space = "&nbsp;";
enter = "<br>";
hr = "<hr>";

function addHoverEffect(triggerId, targetId, imgSrc, vimeoEmbed, textId1, textId3, whiteId1, whiteId2) {
  const trigger = document.getElementById(triggerId);
  const target = document.getElementById(targetId);
  const text1 = document.getElementById(textId1);
  const text3 = document.getElementById(textId3);
  const white1 = document.getElementById(whiteId1);
  const white2 = document.getElementById(whiteId2);

  trigger.addEventListener('mouseenter', function () {
      // Swap image with Vimeo embed
      const img = target.querySelector('img');
      if (img) {
          target.innerHTML = vimeoEmbed; // Replace content with Vimeo embed
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

  trigger.addEventListener('mouseleave', function () {
      // Swap Vimeo embed back to image
      if (target.querySelector('iframe')) {
          target.innerHTML = `<img src="${imgSrc}" style="width:100%;height:100%;">`; // Restore image
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

// Handling each div individually with Vimeo links
addHoverEffect('post1a', 'post1b', 'images/reel1pic.jpg', '<div style="padding:42.5% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1035884117?badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;" title="CATCHE BALL (Short 2024) Sneak Peek"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', 'post1atransparent1', 'post1atransparent3', 'post1awhite1', 'post1awhite2');
addHoverEffect('post2a', 'post2b', 'images/reel2pic.jpg', '<div style="padding:42.5% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1035884506?badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;" title="Elroy (Short 2024) - Sneak Peak"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', 'post2atransparent1', 'post2atransparent3', 'post2awhite1', 'post2awhite2');
addHoverEffect('post3a', 'post3b', 'images/reel3pic.jpg', '<div style="padding:42.5% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1035884518?badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;" title="The Greatest Man (Short 2024) - Sneak Peek"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', 'post3atransparent1', 'post3atransparent3', 'post3awhite1', 'post3awhite2');
addHoverEffect('post4a', 'post4b', 'images/reel4pic.jpg', '<div style="padding:42.5% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1035884535?badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;" title="Sunday (Short 2024) - Sneak Peek"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', 'post4atransparent1', 'post4atransparent3', 'post4awhite1', 'post4awhite2');
addHoverEffect('post5a', 'post5b', 'images/reel5pic.jpg', '<div style="padding:42.5% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1035884552?badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;" title="Girl with the Spices (Short 2024) - Sneak Peak"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', 'post5atransparent1', 'post5atransparent3', 'post5awhite1', 'post5awhite2');
addHoverEffect('post6a', 'post6b', 'images/reel6pic.jpg', '<div style="padding:42.5% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1035884566?badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;" title="Mini Fridge (Short 2024) - Sneak Peek"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', 'post6atransparent1', 'post6atransparent3', 'post6awhite1', 'post6awhite2');
addHoverEffect('post7a', 'post7b', 'images/reel7pic.jpg', '<div style="padding:42.5% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1035915050?badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Fish in a Pond (Short 2024) - Sneak Peak"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', 'post7atransparent1', 'post7atransparent3', 'post7awhite1', 'post7awhite2');
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
