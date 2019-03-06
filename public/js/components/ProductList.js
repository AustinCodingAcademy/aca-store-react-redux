class ProductList extends React.Component{

    state={products:[]}
    componentDidMount(){
        let whatDoWeWant = store.getState().products;
        this.setState({products:whatDoWeWant})
    }
    render(){
        let productDetails = null;
        if(this.state.products && this.state.products.length > 0){
            productDetails = this.state.products.map((p,i)=>{
                return  <ProductDetail 
                showAddButton = {true}
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