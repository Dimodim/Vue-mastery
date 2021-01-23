var app = new Vue({
    el: "#app",
    data(){
        return {
            socks: 'Socks',
            description: 'Crisp socks that you can\'t miss on',
            image1: './assets/socks_blue.jpg',
            image2: './assets/socks_green.jpg',
            link: '#',
            inStock: true,
            onSale:true,
            variants:[
                {inventory:10,
                image1: './assets/socks_blue.jpg',
                }
            ]
        };
    }

});