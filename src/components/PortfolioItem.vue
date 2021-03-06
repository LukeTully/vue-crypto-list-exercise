<template>
  <div id="portfolio-item-container" class="portfolio-item-container">
    <!-- Ticker icon -->
    <img :src="icon" class="portfolio-item-icon" width="100" height="100" />
    <!-- Exchange rate -->
    <div class="ticker-value-container">{{currency}}<br/>{{ amount | precision(4) }} {{currency}} / C{{amount * exchange | currency }}</div>
    <div class="item-value-container">
      <!-- Change in this Wallet's value today -->
      <p class="portfolio-change" :class="[gainClass]">
        <span v-if="gain !== 0" class="inline-icon-container" :class="['arrow-icon', gainClass]">&#x25b6;</span> {{delta | currency }}
      </p>
      <!-- Honestly not really sure what this was here for -->
      <p>C{{amount * exchange | currency}}</p>
    </div>
  </div>
</template>

<script>
  import * as Utils from "../utils.js";
  
  export default {
    name: "PortfolioItem",
    props: ["currency", "delta", "exchange", "amount"],
    computed: {
      icon() {
        /* Import this item's icon */
        return require(`../assets/currency-icons/${this.$props.currency.toLowerCase()}.svg`);
      },
      gain() {
        /* Determine if a there is a positive, negative, or no difference in value today */
        if (this.delta == 0) return 0;
        if (this.delta > 0) return 1;
        return -1;
      },
      gainClass() {
        /* Determine whether or not the arrow should indicate a gain or loss in our total portfolio */
        if (this.gain == 1) return ["up"];
        if (this.gain == -1) return ["down"];
      }
    },
    filters: {
      ratio(rate, divisor) {
        /* Calculate how many of the current currency equate to the divisor */
        return 1 / (rate / divisor);
      },
      currency(num) {
        /*
          Converts the input number to USD using default
          optional params can be included according to the Intl.NumberFormat spec
          num: Number: number to convert to currency
          locale: String: local language tag that the currency format should be returned in
          options: Object: Other config options according to spec
         */
        return Utils.convertToCurrency(num);
      },
      precision(num, decimals) {
        return Utils.precision(num, decimals);
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
  
  p {
    margin: 0;
  }
  
  .portfolio-item-container {
    background-color: #fff;
    box-shadow: 0px 0px 4px #dfdfdf;
    border: 1px solid #ddd;
    margin-top: 0.5rem;
    border-radius: 2px;
    width:100%;
    
    display: flex;
    flex-flow: row;
    padding-top: 0.4rem;
    padding-bottom: 0.5rem
  }
  
  .portfolio-item-container p {
    float: right;
    clear: both;
    margin-right: 2rem;
  }
  
  .portfolio-item-container .portfolio-change {
    font-size: 1.2rem;
  }
  
  .portfolio-item-icon {
    width: 3rem;
    height: 3rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    flex: 0 1 auto;
  }
  
  .item-value-container {
    flex: 1 1 auto;
    align-self: center;
  }
  
  .ticker-value-container {
    flex: 1 1 auto;
    text-align: left;
    align-self: center
  }
  
  .portfolio-change {
    font-weight: 900;
  }
</style>
