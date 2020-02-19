<template>
<div>
  <h1>{{$route.params.id}}</h1>
    
   <div id ="bookinfo">

     <div id="booktitle">
  
        {{book.title}}<br>
         {{book.author}}
    </div>
         <div id="book-description">
           {{book.plot}}
            {{book.publisher}}
             {{book.pages}}
              {{book.audience}}
                {{book.year}}
    </div>
   </div>

</div>
</template>

<script>
export default {
  name: 'BookInfo',

        
  computed: {
    book(){
     return this.$root.$data.books.find(book => book.id == this.$route.params.id);
    },

    
}
};

</script>

<style>
#bookinfo{

  display: flexbox;
  background-color: darkslategrey;
  justify-content: center;
  color: white;



}

</style>