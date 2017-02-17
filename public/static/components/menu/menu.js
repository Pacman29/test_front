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
           let count = Math.round(12/this.data.iconbuttons.length);
           this.data.iconbuttons.forEach(item => {
               let div = document.createElement('div');
               div.setAttribute('class','col-lg-'+count.toString());
               let a = document.createElement('a');
               a.setAttribute('href',item.href);
               let img = document.createElement('img');
               for(let i in item){
                   if(i != 'href') {
                       img.setAttribute(i,item[i]);
                   }
               }
               a.appendChild(img);
               div.appendChild(a);
               row.appendChild(div);
           });
           con.appendChild(row);
           this.el.appendChild(con);
       }

   }
    window.MenuImage = MenuImage;
})();