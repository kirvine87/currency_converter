import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: [],
      firstCurrency: null,
      secondCurrency: null,
      userAmount: null,
      converted: 0
    },
    filters: {
      round: function(ammount) {
        return ammount.toFixed(2);
      }
    },
    computed: {
      convert: function() {
        return ((this.userAmount * this.secondCurrency)/(this.firstCurrency));
      }
    },
    mounted() {
      this.fetchCurrencies();
    },
    methods: {
      fetchCurrencies: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => this.currencies = data.rates)
      },

    }
  });
})
