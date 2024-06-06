import PropTypes from "prop-types";
import "./CardMarket.css"
const CardMarket = ({title,price,src,type,size, alt,style})=>{
    return(
        <div className={` CardMarket ${size} ${type} ${style}`}>
            <img src={src} alt={alt} />
            <div className="description">
                <h3> {title}</h3>
                <span> $ {price}</span>
            </div>
        </div>
    )
}   

CardMarket.propTypes={
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([ "dark", "light"]),
    price: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small","medium","large"])
}

export default CardMarket