class ShoppingCart extends React.Component{
    state={
        shoppingCart:[]
    }
    componentDidMount(){
        let whatDoWeWant = store.getState().shoppingCart;
        this.setState({shoppingCart:whatDoWeWant})
    }
    render(){
        const items =this.state.shoppingCart.map((p,i)=>{
            return <ProductDetail key={i} product={p} />
        });
        return (
        <div>
            {items}
        </div>
        )
    }
}