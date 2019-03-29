class App extends React.Component{
   state={
       whatToShow:0,
   }
 
   changeView = (view)=>{
    this.setState(()=>{
        return {whatToShow:view}
    })
   }

   render(){
       let content = null;

       if(this.state.whatToShow === 0){
        content = <ProductList/>
       }else{
        content = <ShoppingCart/>
       }
        return (
        <Layout changeView={this.changeView}>
         {content}
        </Layout>
        );
   }
}

App.propTypes = {
    products: PropTypes.string
  };