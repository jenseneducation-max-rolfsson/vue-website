<template>
  <div class="books">
     <router-link 
          v-for="book in books"
          v-bind:to ="'/books/' + book.id" 
          v-bind:key="book.id"
           v-bind:style="{background:book.color}">
          
    {{book.title}}<br>
    {{book.author}}
  
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'BookList',

        
  computed: {
    books(){
      return this.$root.$data.books
    }
  },
}
</script>

<style>
.books{
    display: grid;
    height: 300px;
    grid-template-rows:auto auto ;
    grid-template-columns: auto auto auto auto ;
    grid-gap: 10px;
    padding: 10px;
    background-color: antiquewhite;
    
}



</style>


