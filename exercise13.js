const bankAccount = {
  total: 0,

  withdraw: function withdraw(amount) {
    this.total -= amount;
  },
  deposit: function deposit(amount) {
    this.total += amount;
  },
  balance: function balance() {
    return this.total;
  },
};

module.exports = {
  bankAccount,
};
