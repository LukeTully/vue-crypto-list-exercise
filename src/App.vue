<template>
  <div id="app">
    <h1 class="page-title">Your Portfolio</h1>
    <div v-if="critical">
      {{critical}}
    </div>
    <portfolio-summary :change="change | currency" :total="total | currency" />
    <portfolio-list :items="portfolio" />
  </div>
</template>

<script>
  import PortfolioList from "./components/PortfolioList";
  import PortfolioSummary from "./components/PortfolioSummary";
  import * as Utils from "./utils.js";
  import {
    Wallet,
    ExchangeRate,
    ExchangeRatesToCAD,
    GetWallets,
    AssetGenerator
  } from "./ApiMock.js";
  
  export default {
    name: "App",
    components: {
      PortfolioList,
      PortfolioSummary
    },
    beforeCreate() {
      /*  Set up the initial store */
      GetWallets().then(result => {
        result.map(item => {
          this.$store.dispatch("ADD_ITEM", item);
        });
      });
    },
    computed: {
      portfolio() {
        return this.$store.state.items.map(item => item["exchange"] = this.ratesDict[item.currency]);
      },
      critical() {
        return this.$store.state.criticalError;
      },
      total() {
        // Calculate the sum of all wallets based on their exchange rates
        return this.portfolio.reduce((acc, cur) => acc + this.ratesDict[cur.currency] * cur.amount, 0);
      },
      change() {
        // Calculate the sum of all currenct fluxuations based on their changeToday value
        return this.portfolio.reduce((acc, cur) => {
          return acc + cur.changeToday;
        }, 0);
      },
      ratesDict() {
        /* Transform array of ExchangeRate objects into a dict indexed by their currency */
        return ExchangeRatesToCAD.map(rate => dict[rate.currency] = rate.rate);
      }
    },
    filters: {
      currency(num) {
        return Utils.precision(num, 2);
      }
    }
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }
  #app {
    font-family: 'Source Sans Pro', Helvetica, Arial Black, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 50rem;
    background-color: #fff;
    float:left;
    clear:both;
  }
  

  .page-title {
    float:left;
    display:block;
    width:100%;
    clear:both;
    margin:0;
    padding:0;
    border-bottom: 1px solid #ddd;
    font-size: 1.6rem;
    padding-top: 1rem;
    padding-bottom: 0.6rem;
    padding-left: 1rem;
    text-align: left;
  }
  body {
    background-color: rgba(155, 192, 164, 1);
  }
  
  .arrow-icon.down {
    transform: rotate(90deg);
    color: red;
  }
  
  .arrow-icon.up {
    transform: rotate(-90deg);
    color: rgba(117, 175, 100, 1.0);
  }
  
  .portfolio-change.up {
    color: rgba(117, 175, 100, 1.0);
  }
  
  .portfolio-change.down {
    color: red;
  }
  
  .inline-icon-container {
    display: inline-block;
  }
</style>
