/**
 * Created by pacman29 on 17.02.17.
 */
(function() {
    window.IconButton = class IconButton {
        constructor(options) {
            this.text = options.text;
            this.attrs = options.attrs || [];
        }

        setAttrs(attrs) {
            Object.keys(attrs).forEach(name => {
                if(name != "href"){
                    this.el.setAttribute(name, attrs[name]);
                }
            });
        }

        render() {
            console.log(this.attrs);
            this.el.innerHTML = this.text;
            this.el.createElement('img');
            this.setAttrs(this.attrs);
            return this;
        }

        toString() {
            return this.el.outerHTML;
        }
    }
})();
