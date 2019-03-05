class App extends React.Component{
   state = {
       whatToShow: 0
   }
    
   componentDidMount(){
    
    fetch('https://acastore.herokuapp.com/products')
     .then((response)=> {
       return response.json();
     })
     .then((data) => {
        let data2 = data.map(product => {
            product.reviews = product.reviews.length;
            return product;
        });
        store.dispatch({type: "PRODUCTS_LOADED", value: data2})
     });
    }


   changeView = (view)=>{
    this.setState(()=>{
        return {whatToShow:view}
    })
   }

   render(){
       let content = null;

       if(this.state.whatToShow ===0){
        content = <ProductList />
       }
       else{
        content = <ShoppingCart />
       }
        return (
        <Layout 
        changeView ={this.changeView} 
        >
         {content}
        </Layout>
        );
   }
}

App.propTypes = {
    products: PropTypes.string
  };