/**
 * Created by pacman29 on 17.02.17.
 */
(function() {
    if (typeof window === 'object') {
        const game_menu = document.querySelector('.game_menu');
        const menu = new window.MenuImage ({
            el: game_menu,
            data: {
                iconbuttons: [
                    {
                        href: "singin",
                        src:  "../images/1.png",
                        class: "my_btn_image img-responsive",
                        onMouseOver: "this.src='../images/GOOGFACE.png'",
                        onMouseOut: "this.src='../images/1.png'"
                    },
                    {
                        href: "#",
                        scr: "../images/About_us.png",
                        class: "my_btn_image img-responsive",
                        onMouseOver: "this.src='../images/We_do_it.png'",
                        onMouseOut: "this.src='../images/About_us.png'"
                    }

                ]
            }
        });
        alert(menu);
        game_menu.appendChild(menu.el);
    }
})();
