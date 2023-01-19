import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./Context";
import PageNavigation from "./NavigationPage";
import {Container} from "./Styles/Container";
import { TbTruckDelivery } from "react-icons/tb";
import MyImage from "./MyImage";

const API = "https://api.pujakaitem.com/api/products";


const SingleProducts = () => {
  const { getSingleProduct, isSingleLoading , singleProduct } = useProductContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
    image,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return(
  <> 
  <Wrapper>
    <Container classname="container">
    <PageNavigation val={name}/>
      <div className="grid grid-two-column">
        <div className="product_images"> 
          <MyImage imgs={image}/>
        </div>
      <div className="product-data">
        <h2>{name}</h2>
        <p>{stars}</p>
        <p>{reviews}</p>
        <p className="product-data-price product-data-real-price">
          Deal Of The Day ${price}
        </p>
        <p>{description}</p>
        <div className="product-data-warranty">
          <div className="product-warranty-data">
            <TbTruckDelivery className="warranty-icon"/>
            <p>Free Delivery</p>
          </div>
          <div className="product-warranty-data">
            <TbTruckDelivery className="warranty-icon"/>
            <p>30 Days Replacement</p>
          </div>
          <div className="product-warranty-data">
            <TbTruckDelivery className="warranty-icon"/>
            <p>Cash on Delivery</p>
          </div>
          <div className="product-warranty-data">
            <TbTruckDelivery className="warranty-icon"/>
            <p>Alpha Quality</p>
          </div>
        </div>
        <p>
        Cart :
        <span>
          <b> {category} In Stock </b>
        </span>
        </p>
        <p>
          ID : <span><b> {stock}</b></span>
        </p>
        <p>
          BRAND : <span><b> {company}</b></span>
         </p>
      </div>    
     </div>
    </Container>
  </Wrapper>
  </>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .warranty-icon{
      font-size:2rem;
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;


export default SingleProducts;