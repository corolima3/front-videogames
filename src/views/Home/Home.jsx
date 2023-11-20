import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getAllGenres } from '../../redux/actions'
import CardsContener from "../../components/CardsContener/CardsContener";
import Filter from '../../components/Filter/Filter';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import style from './Home.module.css'

const Home = () => {

  const dispatch = useDispatch();
  const BY_PAGE = 15;

  const { allVideogames, byName, access, filterVideogames, error } = useSelector((state) => state)
  const [data, setData] = useState(allVideogames);

  useEffect(() => {
    if (!allVideogames.length) dispatch(getAllVideogames());
    if (!getAllGenres.length) dispatch(getAllGenres());

    }, [allVideogames.length]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (byName.length && access) {
      setData(byName);
      setCurrentPage(1)
    } else if (error) {
      setData([])
    } else {
      setData(allVideogames);
    }
  }, [byName, allVideogames, filterVideogames]);


  const startIndex = (currentPage - 1) * BY_PAGE;
  const endIndex = startIndex + BY_PAGE;

  const pageItems = data.slice(startIndex, endIndex);

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
  function handlePage(pageNumber) {
    setCurrentPage(pageNumber);
  }
  const pageCount = Math.ceil(data.length / BY_PAGE);

  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {
        allVideogames.length ?
          <div className={style.container}>
            <Filter setData={setData} setCurrentPage={setCurrentPage} />
            <div className={style.center}>

              <button className={style.btn} onClick={handlePrevPage}>{"<"}</button>
              {pageNumbers.map((pageNumber) => (
                <button key={pageNumber} onClick={() => handlePage(pageNumber)}
                  className={currentPage === pageNumber ? style.btn_active : style.btn}>
                  {pageNumber}
                </button>
              ))}
              <button className={style.btn} onClick={handleNextPage}>{">"}</button>
            </div>
            {pageItems.length ? <CardsContener pageItems={pageItems} /> : <Error />}

          </div> : <Loading />
      }
    </div>
  )
};

export default Home;