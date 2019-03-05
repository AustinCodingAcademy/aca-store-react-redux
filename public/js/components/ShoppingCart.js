class ShoppingCart extends React.Component {

    state = {
        shoppingCart: []
    }

    componentDidMount() {
        let cart = store.getState().shoppingCart;
        this.setState({shoppingCart: cart});

    }

    render () {

        let items = this.state.shoppingCart.map((p,i)=>{
            return <ProductDetail key={i} product={p} />
        });

        return (
            <div>
                {items}
            </div>
          );
    }

}