const ProductDetails=({product,addToCart})=>(
    <div className="container mb-5 mt-5">
    <div className="row d-flex flex-row">
        <div className="col-md-5 product-image">
            <img className="img-fluid" src={`/images/${product.image}.jpg`} alt="" />
        </div>
        <div className="col-md-2 product-small d-flex flex-md-column justify-content-start order-md-first">
            <img className="img-fluid" src={`/images/${product.images[0]}.jpg`} alt="" />
            <img className="img-fluid" src={`/images/${product.images[1]}.jpg`} alt="" />
            <img className="img-fluid" src={`/images/${product.images[2]}.jpg`} alt="" />
        </div>
    
        <div className="col-md-5">
            <h6 className="text-uppercase text-secondary">{product.category}</h6>
            <h2 className="fs-3">{product.name}</h2>
            <h5 className="text-secondary fs-6 fw-bold">${product.price}</h5>
           
           
            <button className="btn btn-dark w-100 my-5" onClick={()=>addToCart(product)}><i className="bi bi-cart-plus-fill"></i>
                Add to Cart </button>
            <div>
              <span className="text-secondary text-small">Details :</span>
              
                <div className="accordion accordion-flush" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Details Of Item #1
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                   
                    
                  </div>
            </div>
        </div>
    </div>

</div>  

)

export default ProductDetails