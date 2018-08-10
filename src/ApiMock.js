var Wallet = function(currency, amount, changeToday) {
  this.currency = currency; // Cryptocurrency
  this.amount = amount; // Total current value
  this.changeToday = changeToday; // Delta between current and former value that occured today
};

var ExchangeRate = function(currency, rate) {
  this.currency = currency;
  this.rate = rate;
};

var ExchangeRatesToCAD = [
  new ExchangeRate("BTC", 10100),
  new ExchangeRate("XMR", 320.45),
  new ExchangeRate("LTC", 241.4),
  new ExchangeRate("DOGE", 0.00041),
  new ExchangeRate("ETH", 500.12717)
];


const acceptedTypes = ["icons"];

class AssetGenerator {
  constructor(assetDir, options) {
    /* 
		
		assetDir: Subdirectory of all static assets
		options: Dictionary of specific asset type subdirectories (e.g assets/icons)
		
		*/
    this.root = assetDir;
    this.types = this.filterOptions(options);
  }
  getAcceptedTypes() {
    return acceptedTypes;
  }
  filterOptions(options) {
    let types = this.getAcceptedTypes();
	let filteredOptions = {};
    // Filter user provided options by our internal list of accepted options
    types.map(typeKey => {
    	filteredOptions[typeKey] = options[typeKey];
	});
	return filteredOptions;
  }
  getAssetTypes() {
    return this.types;
  }

  // TODO: Refactor so it makes sense given the migration to a seperate class
  GetStaticIcons(currencyList) {
	var _self = this;
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (Math.random() < 0.2) {
          reject("Could not connect to server");
          return;
        }
		let icons = {};
        currencyList = currencyList.map(wallet => {
		  
		  console.log(this);
		  let assetTypes = _self.getAssetTypes();

          // Construct fully qualified asset paths
          if (assetTypes["icons"]) {
            // TODO: Should not be static. Abstract away with getter
            icons[wallet.currency] = `${
              assetTypes["icons"]
            }${wallet.currency.toLowerCase()}.svg`;
          } else {
            icons[wallet.currency] = `${wallet.currency.toLowerCase()}.svg`;
          }
        });

        resolve(icons);
      }, 250);
    });
  }
}

function GetWallets() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Math.random() < 0.2) {
        reject("Could not connect to server");
        return;
      }

      resolve([
        new Wallet("BTC", 0.5001, 1000.77),
        new Wallet("ETH", 1.2211, -213.4),
        new Wallet("LTC", 105.3177, 0),
        new Wallet("XMR", 1, 0.48)
      ]);
    }, 250);
  });
}
