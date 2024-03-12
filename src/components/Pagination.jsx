// eslint-disable-next-line react/prop-types
const Pagination = ({ productsPerPage, totalProducts, currentPage, setCurrentPage }) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
        window.scrollTo({ top: 380, behavior: "smooth" })
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
        window.scrollTo({ top: 380, behavior: "smooth" });
    }
    
    const pageInit = (n) => {
        setCurrentPage(n)
        window.scrollTo({ top: 380, behavior: "smooth" });
    }

    return (
        <nav className="flex flex-row justify-around my-8 font-avenir2 text-center text-white">
  
            <button className={`border font pagination-previous px-2 py-1 rounded-md ${currentPage === 1 ? 'bg-slate-400 text-gray-500' : ''}`} onClick={onPreviousPage} disabled={currentPage === 1}>Anterior</button>
            <ul className="flex flex-row items-center gap-x-1 sm:gap-x-5">
                {pageNumbers.map(noPage => (
                    <li key={noPage}>
                        <button 
                            className={`border pagination-previous px-3 py-2 rounded-md ${noPage === currentPage ? 'bg-white text-black' : ''}`}
                            onClick={() => pageInit(noPage)}
                        >
                            {noPage}
                        </button>
                    </li>
                ))}
            </ul>
            <button className={`border pagination-previous px-2 py-1 rounded-md ${currentPage >= pageNumbers.length ? 'bg-slate-400 text-gray-500' : ''}`} onClick={onNextPage} disabled={currentPage >= pageNumbers.length}>Siguiente</button>
        </nav>
    )
}

export default Pagination