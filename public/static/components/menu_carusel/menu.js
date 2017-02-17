/**
 * Created by pacman29 on 17.02.17.
 */
(function () {
   class MenuImage {
       constructor(options = {data: {}}) {
           this.data = options.data;
           this.el = options.el;

           this.render();
       }

       render(){
           this.updateHtml();
       }

       updateHtml() {
           let con = document.createElement('div');
           con.setAttribute('class','container');
           let row = document.createElement('div');
           row.setAttribute('class','row');
           this.data.iconbuttons.forEach(item => {
               let div = document.createElement('div');
               let img = document.createElement('img');
               img.setAttribute('href',item.href);
               img.setAttribute('src',item.src);
               img.setAttribute('class',item.class);
               img.setAttribute('onMouseOut',item.onMouseOut);
               img.setAttribute('onMouseOver',item.onMouseOver);
               div.appendChild(img);
               row.appendChild(div);
           });

           this.el.appendChild();
       }

   }
    window.MenuImage = MenuImage;
})();