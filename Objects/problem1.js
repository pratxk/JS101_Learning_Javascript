var rectangle = {
  length: 10,
  width: 5,
  area: function() {
    return this.length * this.width;
  },
  perimeter: function() {
    return 2 * (this.length + this.width);
  }
};

console.log(rectangle.area());
console.log(rectangle.perimeter());