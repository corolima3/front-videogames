import style from './Paginado.module.css';

const Paginado= (props)=>{
    const {currentPage, data, setCurrentPage, BY_PAGE, pageCount} = props

//    const pageCount = Math.ceil(data.length / BY_PAGE);
    
    const pageNumbers = [];
  
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i);
    }
    function handlePage(pageNumber) {
        setCurrentPage(pageNumber);
      }
    function handlePrevPage() {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      }
    
      function handleNextPage() {
        if (currentPage < Math.ceil(data.length / BY_PAGE)) {
          setCurrentPage(currentPage + 1);
        }
      }

    return (

        <div className={style.center}>
          <button onClick={handlePrevPage}>{"<"}</button>
            {pageNumbers.map((pageNumber) => (
            <button key={pageNumber} onClick={()=> handlePage(pageNumber)} 
            className={currentPage === pageNumber ? style.activeButton: "" }>
            {pageNumber}
          </button>
          ))}
          <button onClick={handleNextPage}>{">"}</button>
        </div>
      
    )
}
export default Paginado;