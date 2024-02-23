var kiranadetails = {
  data: [
      { name: "Rice", quantity: 2, price: 60 },
      { name: "Dal", quantity: 3, price: 50 },
      { name: "Salt", quantity: 1, price: 20 }
  ],
   Total : function () {
     totalvalue=0;
    for(var item of this.data){
      totalvalue+=item.quantity*item.price;
    }
     return totalvalue;
  }
};

console.log(kiranadetails.Total());