import React, { useEffect, useState } from "react";
import Cart from "./cart";
import Table from "./table";
import MyModal from "./ShowModal";
import { X } from "lucide-react";

function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [view, setView] = useState("cart");
  const [filterdata, setFilterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showtabmovie, setShowTabMovie] = useState(false);
  const [showtabseries, setShowTabSeries] = useState(false);
  const [showtabyear, setshowtabYear] = useState(false);
  const [New, setNew] = useState("");

  const API = " http://www.omdbapi.com/?i=tt3896198&apikey=fdb5f1a2&s=2012";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovieData(data.Search);
      setFilterData(data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  function changeView() {
    if (view === "cart") {
      setView("table");
    } else {
      setView("cart");
    }
  }

  // --- filterData from movies starts here ---;
  const filterDataFun = (year, type) => {
    year = year.trim();
    type = type.trim();
    if (year !== "" && type !== "") {
      setMovieData(
        movieData.filter((item) => {
          return item?.Year === year && item?.Type === type;
        })
      );
      if (type === "movie") {
        setshowtabYear(true);
        setNew(year);
        setShowTabMovie(true);
        setShowTabSeries(false);
      } else {
        setShowTabMovie(false);
        setshowtabYear(true);
        setShowTabSeries(true);
        setNew(year);
      }
    } else if (year !== "" && type === "") {
      setMovieData(
        movieData.filter((item) => {
          return item?.Year === year;
        })
      );
      setshowtabYear(true);
      setNew(year);
    } else if (year === "" && type !== "") {
      setMovieData(
        movieData.filter((item) => {
          return item?.Type === type;
        })
      );
      if (type === "movie") {
        setShowTabMovie(true);
      } else {
        setShowTabSeries(true);
      }
    }
  };
  // filterData from movies ends here

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const handlesearch = (e) => {
    const searchText = e.target.value;
    setSearchQuery(searchText);
    if (searchText.length > 0) {
      const filteredResults = filterdata.filter((item) => {
        return item.Title.toLowerCase().includes(searchText.toLowerCase());
      });
      setMovieData(filteredResults);
    } else {
      setMovieData(filterdata);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="flex flex-row items-center justify-around w-full mt-7">
        {/* search bar starts*/}
        <div>
          <input
            type="text"
            placeholder="Movie Name"
            value={searchQuery}
            onChange={handlesearch}
            className="text-black rounded-sm h-[35px] w-[700px] px-2 focus:outline-none"
          />
        </div>
        {/* search bar ends */}

        {/* popup starts here */}
        <div>
          <button
            className="bg-white text-black font-bold m-1 p-[7px] font-mono rounded-sm h-9 hover:bg-black hover:text-white"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Open Filter
          </button>
          {showModal && (
            <MyModal
              setShowModal={setShowModal}
              filterDataFun={filterDataFun}
            />
          )}
        </div>
        {/* popup ends here */}
      </div>

      {/* extra button starts here */}
      <div className="flex w-full justify-start items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 h-11">
        {showtabyear === true ? (
          <div className="flex bg-white items-center mx-16 text-black font-mono px-2 mt-4 h-9 rounded-full hover:border-2 hover:border-red-600">
            <p className="text-xl ">{New}</p>
            <button
              className="hover:font-bold hover:text-red-700"
              onClick={() => {
                setshowtabYear(false);
                setMovieData(filterdata);
              }}
            >
              <X />
            </button>
          </div>
        ) : null}

        {showtabmovie === true ? (
          <div className="flex bg-white items-center text-black font-mono px-2 mt-4 h-9 rounded-full hover:border-2 hover:border-red-600">
            <p className="text-xl">movie</p>
            <button
              className="hover:font-bold hover:text-red-700"
              onClick={() => {
                setShowTabMovie(false);
                setMovieData(filterdata);
              }}
            >
              <X />
            </button>
          </div>
        ) : null}

        {showtabseries === true ? (
          <div className="flex bg-white items-center text-black font-mono px-2 ml-10 mt-4 h-9 rounded-full hover:border-2 hover:border-red-600">
            <p className="text-xl ">series</p>
            <button
              className="hover:font-bold hover:text-red-700"
              onClick={() => {
                setShowTabSeries(false);
                setMovieData(filterdata);
              }}
            >
              <X />
            </button>
          </div>
        ) : null}
      </div>
      {/* extra button ends here */}

      {/* Displaying cart and table */}
      {view === "cart" ? (
        <div className="flex flex-wrap mx-28 justify-evenly pt-7 text-white ">
          {movieData.map((data, index) => {
            return <Cart data={data} key={index} />;
          })}
        </div>
      ) : (
        <div>
          <Table userData={movieData} />
        </div>
      )}
      {/* Displaying cart and table ends here */}

      {/* Button starts here */}
      <button
        className="bg-white p-2 m-7 text-black hover:text-white hover:bg-black font-mono font-bold rounded-3xl"
        onClick={changeView}
      >
        <p className="text-xl font-bold">
          {view === "cart" ? "Table" : "Cart"} View
        </p>
      </button>
      {/* Button ends here */}
    </div>
  );
}

export default Movie;
