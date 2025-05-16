const cart = {
  product: [
    "Macbook Pro M4",
    "Macbook Air M4",
    "Apple Watch Series 10 46mm",
    "iPhone 16",
    "iPhone 16 Pro Max",
    "iMac M4",
    "iPad Pro 13in",
  ],
  storage: [512, 256, 64, 128, 1024, 512, 2048],
  ram: [16, 16, 16, 16, 16, 24, 8],
  price: [1599.9, 1099.9, 429.9, 899.9, 1199.9, 1799.9, 2199.9],
  qtt: [2, 5, 3, 10, 1, 1, 1],
  category: ["Macbook", "Macbook", "Watch", "iPhone", "iPhone", "iMac", "iPad"],

  calcularTotal: function () {
    return this.price
      .map((value, index) => value * this.qtt[index])
      .reduce((soma, number) => soma + number)
      .toFixed(2);
  },

  filtrarPorCategoria: function (categoria) {
    return this.product
      .map((produto, index) => ({
        product: produto,
        storage: this.storage[index],
        ram: this.ram[index],
        price: this.price[index].toFixed(2),
        qtt: this.qtt[index],
        category: this.category[index],
      }))
      .filter((item_atual) => item_atual["category"] === categoria);
  },

  cresc: function (string) {
    return this.product
      .map((produto, index) => ({
        product: produto,
        storage: this.storage[index],
        ram: this.ram[index],
        price: this.price[index].toFixed(2),
        qtt: this.qtt[index],
        category: this.category[index],
      }))
      .sort((a, b) => a[string] - b[string]);
  },

  decres: function (string) {
    return this.product
      .map((produto, index) => ({
        product: produto,
        storage: this.storage[index],
        ram: this.ram[index],
        price: this.price[index].toFixed(2),
        qtt: this.qtt[index],
        category: this.category[index],
      }))
      .sort((a, b) => b[string] - a[string]);
  },

  ord_alf: function (string) {
    return this.product
      .map((produto, index) => ({
        product: produto,
        storage: this.storage[index],
        ram: this.ram[index],
        price: this.price[index].toFixed(2),
        qtt: this.qtt[index],
        category: this.category[index],
      }))
      .sort(function (a, b) {
        if (a[string].toLowerCase() < b[string].toLowerCase()) {
          return -1;
        } else if (a[string].toLowerCase() > b[string].toLowerCase()) {
          return 1;
        }
        return 0;
      });
  },
  ord_alf_rev: function (string) {
    return this.product
      .map((produto, index) => ({
        product: produto,
        storage: this.storage[index],
        ram: this.ram[index],
        price: this.price[index].toFixed(2),
        qtt: this.qtt[index],
        category: this.category[index],
      }))
      .sort(function (a, b) {
        if (a[string].toLowerCase() < b[string].toLowerCase()) {
          return 1;
        } else if (a[string].toLowerCase() > b[string].toLowerCase()) {
          return -1;
        }
        return 0;
      });
  },
  ordenar: function (prop, order = "c") {
    if (typeof prop === "string") {
      if (prop === "product") {
        if (order.toLowerCase() === "c") {
          return this.ord_alf(prop);
        } else if (order.toLowerCase() === "d") {
          return this.ord_alf_rev(prop);
        } else {
          return "Valor de crescente ou decrescente informado incorretamente!";
        }
      } else if (prop === "category") {
        if (order.toLowerCase() === "c") {
          return this.ord_alf(prop);
        } else if (order.toLowerCase() === "d") {
          return this.ord_alf_rev(prop);
        } else {
          return "Valor de crescente ou decrescente informado incorretamente!";
        }
      } else if (prop === "storage") {
        if (order.toLowerCase() === "c") {
          return this.cresc(prop);
        } else if (order.toLowerCase() === "d") {
          return this.decres(prop);
        } else {
          return "Valor de crescente ou decrescente informado incorretamente!";
        }
      } else if (prop === "ram") {
        if (order.toLowerCase() === "c") {
          return this.cresc(prop);
        } else if (order.toLowerCase() === "d") {
          return this.decres(prop);
        } else {
          return "Valor de crescente ou decrescente informado incorretamente!";
        }
      } else if (prop === "price") {
        if (order.toLowerCase() === "c") {
          return this.cresc(prop);
        } else if (order.toLowerCase() === "d") {
          return this.decres(prop);
        } else {
          return "Valor de crescente ou decrescente informado incorretamente!";
        }
      } else if (prop === "qtt") {
        if (order.toLowerCase() === "c") {
          return this.cresc(prop);
        } else if (order.toLowerCase() === "d") {
          return this.decres(prop);
        } else {
          return "Valor de crescente ou decrescente informado incorretamente!";
        }
      } else {
        return "Propriedade inexistente;";
      }
    } else {
      return "Propriedade informada incorretamente, tente usando:\n product\nstorage\nram\nprice\nqtt\ncategory";
    }
  },
};

console.log(cart.ordenar("product"));
