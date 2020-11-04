require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food make return pizza model install office army gasp'; 
let testAccounts = [
"0x26e31158aa8bfe2168efd55d6ef72d925f0236eb9f56afa5be77605884d2847f",
"0x71968d06f2c3f98007d7dfbc256c42b631b0e861e68899f81d559908833a782b",
"0xe487bfeeeccd0b1272fc9e1b1217dfd0d88b74cdd8c7def8513bc5f4e1ffa792",
"0x43a0d3442eada63d0b01c4598481352f01cec62247455838b0651deaaa5f54fb",
"0xd34c44f9ed67d3ce910885d6e3922b9fd77171d0b2feab6ad136c68f90779505",
"0x69bcd5902cf130275e45e34ad70e0341dffb048025318b78e6f92f39c36bc559",
"0x409812848ea340afde604ba91849c40f7cab7a2040351bf51cf2fc45a65a8679",
"0x5401b31b2a8c8adde5e834968d37ec6a9a6c0ff0fb2fc82d06bb510215f03ad5",
"0x9f21c11bf7f8dc1717dfc62fb824194884c09651ea4de5fabbe935e5135784a4",
"0x627e017865fa982de6ae328affa1f5f266f48ac0d244dd169a18e463b5adbbcd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
