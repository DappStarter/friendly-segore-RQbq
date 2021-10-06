require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind hole guess knee off gas'; 
let testAccounts = [
"0x9259adb977a51398694aea204f4c2ae8c0fa8fb530b3a5e541f8b85ac466fea7",
"0x0ef92e28c7b449d7edccbfa57920b20f502a1c0a9ff906ea1d13911848b215df",
"0x4e3688f04c3868edbc901145b271e2e9a2f9869cdbfbf21abd3863e6d68f1c95",
"0xa782a0692c27ed8db38e454ea1237c05f05b4e8b5997231b5ff5bc15e0f26630",
"0xd5122fc604aea57be98d36abcaf38b3793dd7f13eeb4fdff8f56f671f6a209c3",
"0x8d58d1b13ccc5ee4a8d08b5f6d70cae773ed0a1644a3a76572840c351066c6f5",
"0x65a0f487c3a8755d90b798952317d529af433b3b3a41e8a49af8e10a8ccacf83",
"0x5557373dec4253131121dd5588b65a30447e526bdd7e953d7567dfd665915a56",
"0xe08da27001811bbaa607706019365db217c1c8ad6f89dd73cc1aff3b92210f9c",
"0xb8dbcc6458ed518daab1f8fbed88c4e7f70f52d893ccd3014ef62c2ff50ddf92"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


