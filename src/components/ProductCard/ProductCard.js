import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { add } from "../../reducers/cartReducer";
const ProductCard = (props) => {

    let product = props.item;
    const dispatch = useDispatch();

    return (
        <div className="productItem mb-3">
            <div className="card card-main position-relative">
                <img src={product.image} className="card-img" alt="..."/>
                <div className="card-body">
                    <h6 className="text-center">{product.title}</h6>
                    <h3 className="text-center">${product.price}</h3>
                    {/* <p className="card-text ">{product.description}</p> */}
                    <button className=" mx-auto addCart-btn position-absolute bottom-0 start-50 translate-middle-x mb-3 " onClick={()=>dispatch(add(product))}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;