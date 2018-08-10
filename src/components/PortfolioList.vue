<template>
  <div id="portfolio-container" class="portfolio-container">
    <div v-for="item in changedItems" :key="item.currency">
      <PortfolioItem :currency="item.currency" :exchange="item.exchange" :delta="item.changeToday" />
  
    </div>
  </div>
</template>

<script>
  import PortfolioItem from './PortfolioItem';
  
  export default {
    name: "PortfolioList",
    components: {
      PortfolioItem
    },
    props: ['items'],
    computed: {
      changedItems() {
        return this.items.filter(item => item.changeToday !== 0)
      }
    },
    methods: {
      add_user: function() {
        this.$store.dispatch("ADD_USER", this.user);
  
      },
      delete_user: function(index) {
        this.$store.dispatch("DELETE_USER", index);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .portfolio-container {
    padding-left: 1rem;
    padding-right: 1rem;
    float: left;
    clear: both;
    width: 100%;
    padding-top: 1rem;
    background: white;
  }
</style>
