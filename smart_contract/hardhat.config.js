//https://eth-goerli.g.alchemy.com/v2/ABHJXcBVKpKuvXkvdaeJPT97p5_9covt

require('@nomiclabs/hardhat-waffle')
module.exports={
  solidity:'0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/ABHJXcBVKpKuvXkvdaeJPT97p5_9covt',
      accounts:['25630907edba2270df554b7f5b32060d228b00a6395bb6d91bbac495ec7cca8c'],
      
    }
  }
}