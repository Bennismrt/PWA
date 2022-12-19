class OrderItem {
    constructor(ID, OrderId, ProductID, Price, Qty){
        this.ID = ID;
        this.OrderId = OrderId;
        this.ProductID = ProductID;
        this.Price = Price;
        this.Qty = Qty;
    }
    countTotalOrders(){
        return this.Qty * this.Price;
    };
}

orderItem = new OrderItem(1,2,3,4,1000);
console.log(orderItem);
