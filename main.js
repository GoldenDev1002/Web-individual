
let vueApp = document.getElementById("newApp"); // it will run first and get the element with new app which is assigned to vueApp varaible and placed in vue instance
import {lessons} from "./lessons.js"

let app = new Vue({
    el: vueApp,
    data() {
      return { //key is a unique identifier for each of the object  that maps 
        sitename: "Vue.js School Project",
        
       /* lesson: {
          id: 1000,
          subject: "English",
          location: "Hendon",
          price: 2000,
          image: "subjectPic/english.jpg",

          disable: false,
          spaces: 5,
          showContent: true,
          name: "",
          phoneNumber: "",
        },*/


        lessons, //is a state in vue
        cart: [],
        showContent: true,
        nameInput : "",
        numberInput: "",
        message: "",
        search : "",
        sortFeature: "subject"
      };
    },
filters: {

},
    methods: {
      addToCart(aLesson) {
        return this.cart.push(aLesson.spaces--);
      },

    
      showButton() {
        this.showContent = this.showContent ? false : true;
      },

      canAddToCart(aLesson) {
        return aLesson.spaces > this.cartCount(aLesson.id);
      },

      cartCount(lesson){
        let count = 0;
        for(var i = 0; i < this.cart.length; i++){
          if(this.cart[i]=== lesson){
            count++
          }
        }

        return count;
      },
      checkBtn(){
        let str = /[a-zA-Z]/ 
        let phoneNumber = /[0=9]{11}/
        if(this.nameInput.length != 0 && this.numberInput.length != 0){
           this.message = "Complete"

   
           if(this.nameInput.match(str) ) {
             console.log("this is a string")
           }
   
           if(this.numberInput.match(phoneNumber)){
             console.log("this phone number is correct")
           }
        }
        else{
          this.message = "Fill in all the fields"
        }
        },



        
      
    },

    
    computed: {
      cartItem: function () {
        return this.cart.length || ""; //this data is unsuitabkle because of use rinteraction i.e the user is supposed to input in this scenario
      },


      sortedLessons: function(){
        if(this.lessons.length > 0){
          let lessonArray = this.lessons.slice(0);
          function compare(a, b){
            if(a.subject.toLowerCase() < b.subject.toLowerCase())
              return -1
            
            if(a.subject.toLowerCase() > b.subject.toLowerCase())
              return 1
            
            return 0
          }

          return lessonArray.sort(compare)
        }
      },

      filteredLessons : function(){
        let eachLesson = this.lessons;
        if(this.search != ""){
          eachLesson = eachLesson.filter((lesson) => {

            return lesson.subject.toLowerCase().match(this.search) || lesson.location.toLowerCase().match(this.search)
          })

          

        }


        if(this.lessons.length > 0){
          let lessonArray = this.lessons.slice(0);

          if(this.sortFeature === "subject"){
          function compare(a, b){
            if(a.subject.toLowerCase() < b.subject.toLowerCase())
              return -1
            
            if(a.subject.toLowerCase() > b.subject.toLowerCase())
              return 1
            
            return 0
          }

          return lessonArray.sort(compare)
        }

        else if(this.sortFeature === "price"){

          let lessonArray = this.lessons.slice(0);

          function compare(a, b){
            return a.price - b.price 
          }

          return lessonArray.sort(compare)
            
         
        }


        else if(this.sortFeature === "location"){

          if(this.lessons.length > 0){
            let lessonArray = this.lessons.slice(0);

          function compare(a, b){
            if(a.location.toLowerCase() < b.location.toLowerCase())
              return -1
            
            if(a.location.toLowerCase() > b.location.toLowerCase())
              return 1
            
            return 0
          }

          return lessonArray.sort(compare)

        }
      
        }


    



        


        }

        return eachLesson
   


    
      
       //returns this.lessons array and uses the filter method , to filter each lesson item and return if the title lesson exists it should be true, if it doesn't exist,it shoulbe be false
       //returns an updated array to be looped over 
      },
     
     /* canAddToCart: function () {
        return this.lessons.spaces > this.cartItem;
      }, */

    }

})