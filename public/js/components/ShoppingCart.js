class ShoppingCart extends React.Component{

    state = {
        shoppingCart:[]
    }

    componentDidMount(){
        let thisCart = store.getState().shoppingCart;
        this.setState(()=>{
            return {shoppingCart:thisCart}
        })
    }

    displayItems(){
        return this.state.shoppingCart.map((p,i)=>{
            return <ProductDetail key={i} product={p}/>
        })
    }

    render(){
        return (
          <div>
              {this.displayItems()}
          </div>
        )
      }
    }
   

export default ShoppingCart;