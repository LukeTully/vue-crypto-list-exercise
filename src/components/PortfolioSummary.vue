<template>
  <header id="portfolio-summary-container" class="portfolio-summary-container">
    <p class="portfolio-label" id="portfolio-label">Portfolio Value</p>
    <h2 class="total-value">C{{total | currency}}</h2>
    <h4 class="portfolio-change" :class="[gainClass]">
      <div class="inline-icon-container" :class="[gainClass,'arrow-icon']">&#x25b6;</div> {{change | currency}}
    </h4>
  </header>
</template>

<script>
  import * as Utils from "../utils.js";
  export default {
    name: "PortfolioSummary",
    props: ["total", "change"],
    computed: {
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
    }
  };
</script>

<style scoped>
  #portfolio-summary-container {
    float: left;
    clear: both;
    width: 100%;
  }
  
  h1,
  h2 {
    font-weight: 900;
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
  
  .portfolio-summary-container {
    background-color: #fff;
    box-shadow: 0px 4px 3px #ddd;
  }
  
  .portfolio-change {
    font-weight: 600;
    font-size: 2rem;
    padding: 0;
    margin: 0.4rem 0 0 0;
  }
  
  .total-value {
    font-size: 3rem;
    padding: 0;
    margin: 1rem 0 0 0;
  }
  
  .portfolio-label {
    padding: 0;
    margin: 2rem 0 0 0;
  }
</style>
