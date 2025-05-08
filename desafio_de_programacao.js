const cart = {
  product: [ "Macbook Pro M4", "Macbook Air M4", "Apple Watch Series 10 46mm", "iPhone 16", "iPhone 16 Pro Max", "iMac M4", "iPad Pro 13in"],
  storage: [512, 256, 64, 128, 1024, 512, 2048],
  ram: [16, 16, 16, 16, 16, 24, 8],
  price: [1599.9, 1099.9, 429.9, 899.9, 1199.9, 1799.9, 2199.9],
  qtt: [2, 5, 3, 10, 1, 1, 1],
  category: ["Macbook", "Macbook", "Watch", "iPhone", "iPhone", "iMac", "iPad"],

  calcularTotal: function () {
    return this.price.map((value, index) => value * this.qtt[index]).reduce((soma, number) => soma + number).toFixed(2);
  },

  filtrarPorCategoria: function (categoria) {
    return this.product.map((produto, index) => ({
        product: produto,
        storage: this.storage[index],
        ram: this.ram[index],
        price: this.price[index].toFixed(2),
        qtt: this.qtt[index],
        category: this.category[index],
      })).filter((item_atual) => item_atual.category === categoria);
  },

  cresc: function() {
    return this.product.map((produto, index) => ({
      product: produto,
      storage: this.storage[index],
      ram: this.ram[index],
      price: this.price[index].toFixed(2),
      qtt: this.qtt[index],
      category: this.category[index],
    })).sort((a, b) => a.price - b.price);
  },

  decres: function() {
    return this.product.map((produto, index) => ({
      product: produto,
      storage: this.storage[index],
      ram: this.ram[index],
      price: this.price[index].toFixed(2),
      qtt: this.qtt[index],
      category: this.category[index],
    })).sort((a, b) => b.price - a.price);
  },

  ord_alf: function() {
    return this.product.map((produto, index) => ({
      product: produto,
      storage: this.storage[index],
      ram: this.ram[index],
      price: this.price[index].toFixed(2),
      qtt: this.qtt[index],
      category: this.category[index]
    })).sort(function(a, b){
      if (a.product.toLowerCase() < b.product.toLowerCase()) {
        return -1;
      } else if (a.product.toLowerCase() > b.product.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
};

console.log(cart.calcularTotal());
console.log("\n")

console.log(cart.filtrarPorCategoria("Watch"));
console.log("\n")

console.log(cart.cresc());
console.log("\n")

console.log(cart.decres());
console.log("\n")

console.log(cart.ord_alf());
