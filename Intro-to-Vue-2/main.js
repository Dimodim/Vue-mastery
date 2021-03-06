Vue.component('product-review',{
    template:`
    <form class="review-form" @submit.prevent="onSubmit()">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name" >
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>
    `,
    data(){
        return {
            name: null,
            review: null,
            rating: null
        };
    },
    methods:{
        onSubmit() {
            if(this.name && this.review && this.rating) {
              let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
              }
              this.$emit('review-submitted', productReview)
              this.name = null
              this.review = null
              this.rating = null
            } else {
              if(!this.name) this.errors.push("Name required.")
              if(!this.review) this.errors.push("Review required.")
              if(!this.rating) this.errors.push("Rating required.")
            }
          }
    }
});

Vue.component(
    'product',{
        props:{
            premium:{
                type:Boolean,
                required: true
            }
        },
        template:`
        <div class="product">

            <div class="product-image">
                <a :href="link">
                    <img :src="variants[selectedVariant].image"/>
                </a>
            </div>

            <div class="product-info">
                <h1>User is Premium: {{ premium }}</h1>
                <h2 v-if="onSale">On Sale</h2>
                <h1>{{ title }}</h1>
                <span>{{ description }}</span>
                <h3 v-if="inStock">In Stock</h3>
                <h3 v-else-if="!inStock">Out Of Stock</h3>
                <ul>
                    <li v-for="(detail,index) in details" :key="index" >{{ detail }}</li>
                </ul>
               
                <div @mouseover="updateVariant(index)" 
                v-for="(variant,index) in variants" :key="variant.id" 
                class="color-box" 
                :style="{ backgroundColor: variant.color }">
                </div>

                
                <button v-on:click="addToCart()" :disabled="!inStock" :class="{disabledButton: !inStock }">Add to cart</button>
            </div>
            <product-review @review-submitted="addReview"></product-review>
            <div>
             <h2>Reviews</h2>
             <p v-if="!reviews.length">There are no reviews yet.</p>
             <ul v-if="reviews.length">
               <li v-for="review in reviews">
               <p>{{ review.name }}</p>
               <p>Rating: {{ review.rating }}</p>
               <p>{{ review.review }}</p>
               </li>
             </ul>
            </div>

        </div>`,
        data(){
            return {
                socks: 'Socks',
                description: 'Crisp socks that you can\'t miss on',
                link: '#',
                onSale:true,
                selectedVariant: 0,
                reviews:[],
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
            };
        },
        computed:{
            title(){
                return 'View Mastery ' + this.socks;
            },
            inStock(){
                return  this.variants[this.selectedVariant].quantity > 0;
              }
        },
        methods: {
            addToCart: function(){
                const product = {
                    socks: this.socks,
                    description: this.description,
                    link: this.link,
                    id: this.variants[this.selectedVariant].id, 
                    color: this.variants[this.selectedVariant].color,
                    image: this.variants[this.selectedVariant].image,
                    details:this.details,
                };
                this.$emit('add-to-cart', product);
            },
            updateVariant: function (index){
                this.selectedVariant = index;
            },
            addReview(review){
                console.log(review)
                this.reviews.push(review);
            }
            
        },
    }
)

var app = new Vue({
    el: "#app",
    data(){
        return {
            premium: true,
            cart: []
        };
    },
    methods: {
        addToCart(product){
           this.cart.push(product);
        }
    }
});