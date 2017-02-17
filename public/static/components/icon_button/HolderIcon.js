/**
 * Created by pacman29 on 17.02.17.
 */
(function () {
    window.HolderIcon = class HolderIcon{
        constructor(options = {data: {}}) {
            this.data = options.data;

            this.el = options.el;
            this.render();
        }
        render(){
            this.el.innerHTML = `<a href="${this.data.href}"></a>`;
            this.render_icon();
        }
        render_icon(){
            this.el.appendChild(new window.IconButton({data: this.data, el: this.el}));
        }
    }
})();