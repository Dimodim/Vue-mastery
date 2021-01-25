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
            variants: [
                {
                    id: 2234, 
                    color: 'darkblue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0,
                    onSale: false
                },
                {
                    id: 2235, 
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 14,
                    onSale: true
                }
            ],
            details:['cotton 80%','polyfills 15%', 'elastin 5%']
        };
    }

});