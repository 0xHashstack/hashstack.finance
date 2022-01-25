export const defaultChainId = 3;

export const rpcUrls = {
  56: 'https://bsc-dataseed.binance.org/',
  1666700000: 'https://api.s0.b.hmny.io',
  42: "https://kovan.infura.io/v3/99b8947af7e14278ae235bb21eb81f53",
  3: "https://eth-ropsten.alchemyapi.io/v2/fxrejtNAKunh--Iym4w8DI4mpb4pEEbA"
}

export const networkNames = {
  42: "Kovan Testnet",
  56: 'BSC Mainnet',
  1666700000: 'Harmony Testnet',
  3: "ropsten Testnet"
}

export const SymbolsMap = {
    "WONE": "0x574f4e4500000000000000000000000000000000000000000000000000000000", // WONE
    "USDT": "0x555344542e740000000000000000000000000000000000000000000000000000", // USDT.t
    "USDC": "0x555344432e740000000000000000000000000000000000000000000000000000", // USDC.t
    "BTC": "0x4254432e74000000000000000000000000000000000000000000000000000000", // BTC.t
    "SXP": "0x5358500000000000000000000000000000000000000000000000000000000000",
    "CAKE": "0x43414b4500000000000000000000000000000000000000000000000000000000", // CAKE
    "BNB": "0x57424e4200000000000000000000000000000000000000000000000000000000",
    "ETH": "0x4554480000000000000000000000000000000000000000000000000000000000", // ETH
}

export const symbols = [
  // "0x574f4e4500000000000000000000000000000000000000000000000000000000", // WONE
  "0x555344542e740000000000000000000000000000000000000000000000000000", // USDT.t
  "0x555344432e740000000000000000000000000000000000000000000000000000", // USDC.t
  "0x4254432e74000000000000000000000000000000000000000000000000000000", // BTC.t
  "0x57424e4200000000000000000000000000000000000000000000000000000000"
]


// export const markets = ["WONE", "USDT.t", "USDC.t", "BTC.t"];
export const markets = ["USDT.t", "USDC.t", "BTC.t"];
export const marketAddresses = [
  // '0xD77B20D7301E6F16291221f50EB37589fdAB3720', // WONE
  '0x3d2b1f363c79BaB4320DD0522239617aF31DaFde', // USDT.t
  '0x07D293cFc6E76430af18Ab6Ac3f41828e202D159', // USDC.t
  '0x664aABd659Ae578454c7A7FC5b850DFB2203a87C',  // BTC.t
  '0xb6c2c0764e69FBb1CeC2254ec927Ddc7fe42738F', // SXP
  '0x498D69f8ddf475E21C3d036F0bf0C6Ef82FEF2Ea', // CAKE
  '0x359A0A7DffEa6B95a436d5E558d20EC8972EbC4B' // BNB
  
]
export const latestPrice = [
  // '0.2886',
  '1',
  '1',
  '64931.45'
]

export const DepositInterestRates = {
  "NONE": "7.8%",
  "TWOWEEKS": "10%",
  "ONEMONTH": "15%",
  "THREEMONTHS": "18%"
}

export const VariableDepositInterestRates = {
  "NONE": "0%",
  "TWOWEEKS": "Upto 2.1%",
  "ONEMONTH": "Upto 3.6%",
  "THREEMONTHS": "Upto 6%"
}

export const BorrowInterestRates = {
  "NONE": "18%",
  "ONEMONTH": "15%"
}

// export const decimals = [18,18,18,8];
export const decimals = [8,18,18];

export const DecimalsMap = {
  "BTC": 8,
  "USDT": 18,
  "USDC": 18,
  "BNB": 18
}

export const CommitMap = {
  "NONE": "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000",
  "TWOWEEKS": "0x636f6d69745f54574f5745454b53000000000000000000000000000000000000",
  "ONEMONTH": "0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000",
  "THREEMONTHS": "0x636f6d69745f54485245454d4f4e544853000000000000000000000000000000"
}

export const comit_NONE = "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000";
export const comit_TWOWEEKS = "0x636f6d69745f54574f5745454b53000000000000000000000000000000000000";
export const comit_ONEMONTH = "0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000";
export const comit_THREEMONTHS = "0x636f6d69745f54485245454d4f4e544853000000000000000000000000000000";

export const tokenDistributorAddress = "0xe5d64D78C9E0495fB1FCF4046CB1B6574744Bb2F";

export const pancakeSwapTokenAddress = {
  "0x555344432e740000000000000000000000000000000000000000000000000000": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", //USDC
  "0x555344542e740000000000000000000000000000000000000000000000000000": "0x55d398326f99059fF775485246999027B3197955", //USDT,
  "0x4254432e74000000000000000000000000000000000000000000000000000000": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", //BTC,
  "0x57424e4200000000000000000000000000000000000000000000000000000000": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //BNB
}