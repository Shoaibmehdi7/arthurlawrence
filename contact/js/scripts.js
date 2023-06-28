$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#0F2980', '#ffd200', '#c1c1c1'],
        anchors: ['firstSection', 'secondSection', 'thirdSection'],
        menu: '.main-nav ul',
        onLeave: function(origin, destination, direction){
          if(destination.index === 2){
             destination.item.classList.add('load-background');
          }
        }
    });
});