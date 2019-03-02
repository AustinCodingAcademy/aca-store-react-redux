class ShoppingCart extends React.Component{
    state={
        shoppingCart:[]
    }
    componentDidMount(){
        let shoppingCart = store.getState().shoppingCart;
        this.setState({shoppingCart})

    }
    showItems(){
        return this.state.shoppingCart.map((p,i)=>{
            return <ProductDetail key={i} product={p} />
        });
    }
    render(){
        return (
            <div>
                {this.showItems()}
            </div>
        )
    }
}