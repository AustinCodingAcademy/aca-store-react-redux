class ProductList extends React.Component{
    state = {products:[]}

    componentDidMount(){
    store.subscribe( () => {
        let prods = store.getState().products
        this.setState({products:prods})
    })
    let prods = store.getState().products
    this.setState({products:prods})

    }

    render(){
         
        let productDetails = null;
        if(this.state.products && this.state.products.length > 0){
            productDetails = this.state.products.map((p,i)=>{
                return  <ProductDetail 
                showAddButton = {true}
                addToCart={this.props.addItemToCart}
                key={i} 
                product={p} />
            });
        }else{
            productDetails = "No products available";
        }
        return (
        <div>
            {productDetails}
        </div>
        )
    }
}