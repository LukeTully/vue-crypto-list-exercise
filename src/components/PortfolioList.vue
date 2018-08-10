<template>
  <section id="portfolio-container" class="portfolio-container">
    <div v-for="item in changedItems" :key="item.currency">
      <transition appear name="fade">
              <portfolio-item :currency="item.currency" :exchange="item.exchange" :delta="item.changeToday" :amount="item.amount"/>
      </transition>
    </div>
  </section>
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
        /*
        Only display portfolio items that have changed in value from the previous day
        TODO: Should be more robust. Assuming that we wouldn't want to display neutral wallets doesn't make a ton of sense.
        */
        return this.items.filter(item => item.changeToday !== 0)
      }
    }
  };
</script>
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
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
