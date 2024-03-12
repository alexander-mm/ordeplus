import { useState, useEffect } from "react";
import Pagination from "../components/Pagination"

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [productsPerPage] = useState(4)
    const [currentpage, setCurrentPage] = useState(1)

    const lastIndex = currentpage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    const productList = async () => {
        try {
            const data = await fetch('/data.json');
            const products = await data.json();
            setProducts(products)
        } catch (error) {
            console.error('Error al cargar el archivo JSON:', error);
        }
    };

    useEffect(() => {
        productList()
    })

    const totalProducts = products.length

    return (
        <div>
            <div className="grid grid-cols-1 md:flex flex-wrap justify-center gap-x-32 gap-y-12 py-4 mx-auto lg:max-w-screen-2xl justify-items-center">
                {products.map((item) => (
                    <div key={item.name} className="text-white">
                        <div className="flex justify-center items-center flex-col text-center font-avenir shadow-xl w-[400px] md:w-[530px]">
                            <div className='p-4 w-full flex flex-row justify-evenly items-center'>
                                <img className='max-md:w-44 w-64' src={item.src} alt="" />
                                <div className='text-sm text-start ml-4'>
                                    <p>{item.brand}</p>
                                    <p>{item.from}</p>
                                    <p>{item.model}</p>
                                    <p>{item.flow}</p>
                                    <p>{item.type}</p>
                                    <p>{item.power}</p>
                                    <p>{item.powerReq}</p>
                                    <p>{item.tension}</p>
                                    <p>{item.tank}</p>
                                    <p>{item.desc}</p>
                                    <p>{item.desc2}</p>
                                    <p>{item.desc3}</p>
                                </div>
                            </div>
                            <div className='w-full py-2 border-white border-t-[0.1px] border-opacity-40'>
                                <h1 className='font-bold text-md lg:text-xl'>{item.name}</h1>
                            </div>
                        </div>
                    </div>
                )).slice(firstIndex, lastIndex)}
            </div>
            <Pagination
                productsPerPage={productsPerPage}
                currentPage={currentpage}
                setCurrentPage={setCurrentPage}
                totalProducts={totalProducts}
            />
        </div>
    )
}

export default ProductList