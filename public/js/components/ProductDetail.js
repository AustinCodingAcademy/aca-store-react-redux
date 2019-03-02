/*
{
    "id": 1,
    "name": "Body Luxuries Sweet Lavender Hand Sanitizer",
    "description": "Cleans your hands",
    "reviews": 46,
    "rating": 2,
    "imgUrl": "http://dummyimage.com/136x167.bmp/cc0000/ffffff",
    "price": "$95.11"
  }
  */
 class ProductDetail extends React.Component{

  addToCart(){
    store.dispatch({type:"ADD_PRODUCT_TO_CART",value:this.props.product})
  }

  makeButton(){
    let btnAddToCart = "";
    if(this.props.showAddButton){
      btnAddToCart =   <button onClick={(event)=>{
        this.addToCart(this.props.product);
      }}>Add To Cart</button>
    }
    return btnAddToCart
  }

  makeStar(){
    let star = [];
    for(let i = 0; i < this.props.product.rating; i ++){
      star.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    }
    let emptystars = []
    emptystars.push(<span class="glyphicon glyphicon-star-empty"></span>)
    return star
  }

  render(){
  return ( 
    <div className="col-sm-4 col-lg-4 col-md-4">
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
            {this.props.product.reviews} reviews</p>
            <p>
                {this.makeStar()}
            </p>
        </div>
        {this.makeButton()}
      </div>
    </div>);
  }
}