import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState(1);

    const itemPerPage = 10;
    const noOfPages = Math.ceil(products.length / itemPerPage);


    const selectedPageHandler = (i) => {
        console.log(i + 1);
        setPages(i + 1);
    }

    const prevBtnHandler = () => {
        setPages(pages - 1);
    }
    const nextBtnHandler = () => {
        setPages(pages + 1);
    }


    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=100",)
            .then((res) => {
                // console.log(res.data.products);
                const items = res.data.products;
                setProducts(items);
            }).catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Pagination </h1>
            <div className='container'>
                {products.length > 0 &&
                    products.slice(pages * 10 - 10, pages * 10).map((product) => {
                        const { id, title, description, price, thumbnail, rating } = product;
                        return (

                            <div className='singleContainer' key={id}>
                                <img src={thumbnail} alt="" style={{ width: "100px", height: "80px" }} />
                                <h3>{title}</h3>
                                {/* <p>{description}</p>
                                <h4>Rs:{price}</h4> */}
                            </div>
                        )
                    })
                }
            </div>
            {
                <div className='pagination'>
                    <span
                        className={pages < 1 ? "disable" : ""}
                        onClick={prevBtnHandler}>◀</span>
                    {/* {console.log([Array.from(noOfPages)])}  */}
                    {Array.from({ length: noOfPages }, (_, i) => {
                        return <span key={i}
                            className={pages === i + 1 ? "selected-page" : ""}
                            onClick={() => selectedPageHandler(i)}>{i + 1}</span>
                    })}
                    <span
                        className={pages > 0 && pages < noOfPages ? "" : "disable"}
                        onClick={nextBtnHandler}>▶</span>
                </div>
            }

        </div>
    )
}

export default Pagination;