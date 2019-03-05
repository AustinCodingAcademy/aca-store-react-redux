class ProductList extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {

        //this.setState({products: store.getState().products});
        store.subscribe(() => {
            let theProducts = store.getState().products;
            this.setState({products: theProducts[0]});
        });
        if (store.getState().products.length == 1) {
            this.setState({products: store.getState().products[0]});
        }
    }


    render() {
        let productDetails = null;
        if(this.state.products && this.state.products.length > 0){
            productDetails = this.state.products.map((p,i)=>{
                return  <ProductDetail 
                showAddButton = {true}
                key={i} 
                product={p} />
            });
        }
        else{
            productDetails = "No products available";
        }
        return (
          <div>
              {productDetails}
          </div>
        );
    }
}