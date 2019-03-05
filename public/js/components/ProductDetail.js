class ProductDetail extends React.Component{
  makeStar(){
    let star = [];
    for(let i = 0; i < this.props.product.rating; i ++){
      star.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    }
    let emptystars = []
    emptystars.push(<span class="glyphicon glyphicon-star-empty"></span>)
    return star
  }

  addToShoppingCart(){
    let btnAddToCart = "";
    if(this.props.showAddButton){
      btnAddToCart =   <button onClick={(event)=>{
           store.dispatch({type:"ADD_PRODUCT_TO_CART",value:this.props.product})
        }}>Add To Cart</button>
    }
    return (btnAddToCart)
  }
    render(){
      return ( <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src="http://placehold.it/320x150" alt=""/>
            <div className="caption">
                <h4 className="pull-right">
                {this.props.product.price}</h4>
                <h4><a href="#">{this.props.product.name}</a>
                </h4>
                <p>{this.props.product.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">
                {this.props.product.reviews.length} reviews</p>
                <p>
                    {this.makeStar()}
                </p>
            </div>
          {this.addToShoppingCart()}
        </div>
    </div>);
  }
}