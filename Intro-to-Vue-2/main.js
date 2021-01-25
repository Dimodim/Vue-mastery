var app = new Vue({
    el: "#app",
    data(){
        return {
            socks: 'Socks',
            description: 'Crisp socks that you can\'t miss on',
            link: '#',
            inStock: true,
            onSale:true,
            selectedVariant: 0,
            variants: [
                {
                    id: 2234, 
                    color: 'darkblue',
                    image: './assets/socks_blue.jpg',
                    quantity: 0,
                    onSale: false
                },
                {
                    id: 2235, 
                    color: 'green',
                    image: './assets/socks_green.jpg',
                    quantity: 14,
                    onSale: true
                }
            ],
            details:['cotton 80%','polyfills 15%', 'elastin 5%'],
            cart: 0
        };
    },
    methods: {
        addToCart: function(){
            this.cart+=1;
        },
        updateVariant: function (index){
            this.selectedVariant = index;
        }
    },

});