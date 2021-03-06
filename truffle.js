module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
    },
    ropsten: {
      host: 'localhost',
      port: 8546,
      network_id: '3',
      gas: 4612388,
    },
  },
  test_directory: 'transpiled/test',
};
