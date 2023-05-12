import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import RespNavbar from "../../components/navbar/RespNavbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Button } from "@mui/material";
import Card from "../../components/card/Card";
import ArticleCard from "../../components/articlecard/ArticleCard";
import Footer from "../../components/footer/Footer";
import GoToTop from "../../components/gototop/GoToTop";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../config";

const Home = () => {
  const [showSearch, setShowSearch] = useState("");
  const { data, loading } = useFetch("/software");
  const [cats, setGetCats] = useState([]);

  const onSearch = (e) => {
    setShowSearch(e.target.value);
  };

  useEffect(() => {
    const getCats = async () => {
      const res = await newRequest.get("/categories?trending=true&limit=8");
      setGetCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="home">
      <RespNavbar />
      <div className="backImg">
        <div className="homeContainer">
          <Navbar />
          <div className="header">
            <h1>Discover the best softwares</h1>
            <h3>
              Search, compare & choose the right software with <br></br> genuine
              reviews for you
            </h3>
            <div className="headSearch">
              <input
                type="search"
                placeholder="Search Softwares"
                onChange={onSearch}
              />
              <span>
                <SearchOutlinedIcon className="search" />
              </span>
              {showSearch.length > 1 && (
                <ul>
                  {loading ? (
                    "loading"
                  ) : (
                    <>
                      {data
                        .filter((search) =>
                          search.name
                            .toLowerCase()
                            .includes(showSearch.toLowerCase())
                        )
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((search) => (
                          <li key={search._id}>
                            <Link to={`/${search.name}-${search._id}`}>
                              {search.name}
                              <img
                                className="serachLogo"
                                src={search.sofwareLogo}
                                alt=""
                              />
                            </Link>
                            <Link
                              to={`/softwares?catName=${search.catName}`}
                              className="cat"
                            >
                              {search.catName}
                            </Link>
                          </li>
                        ))}
                    </>
                  )}
                  {data === "" && "No results were found"}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="explore">
        <div className="exploreCard">
          <img src="/ExploreCard1.jpg" alt="logo" />
          <div>Browse Top Articles</div>
          <p>
            Boost Your Productivity With Free Guides and Resources and
            Installation with BB
          </p>
          <Button>READ & DISCOVER SOFTWARE</Button>
        </div>
        <div className="exploreCard">
          <img src="/ExploreCard2.jpg" alt="logo" />
          <div>Reach More Buyers bb</div>
          <p>
            Your future customers are researching their next purchase of
            software BB
          </p>
          <Button>ADVERTISE WITH US BB</Button>
        </div>
        <div className="exploreCard">
          <img src="/ExploreCard3.jpg" alt="logo" />
          <div>Add your Experience on BB</div>
          <p>
            Share your software experience to help BB others make great choices
          </p>
          <Button>WRITE REVIEW ON BB</Button>
        </div>
      </div>

      <div className="popular">
        <h3>Popular Softwares</h3>

        <Card />
      </div>

      <div className="trend">
        <div className="trendConatiner">
          <h3>Trending Categories on Bluwberry</h3>
          <div className="dFlex">
            <div className="trendBox hide">
              <img alt="trend" src="./img4.png" />
            </div>
            <div className="trendBox">
              {cats?.map((trend) => (
                <Link
                  to={`/softwares?catName=${trend.name}`}
                  className="categoryTitle"
                  key={trend._id}
                >
                  {trend.name}
                  <ChevronRightRoundedIcon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="topArticle">
        <h3>Top Recommended Articles on Bluwberry</h3>
        <div className="article">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>

      <div className="selling">
        <div className="sellContainer">
          <div className="dFlex">
            <div className="sellBox">
              <img src="/img3.png" alt="sellSoftware" />
            </div>
            <div className="sellBox flexColumn">
              <h3>OK, Selling software?</h3>
              <h4>Reach more buyers using bluwberry</h4>
              <p>
                Your future customers are researching their next purchase on
                bluwberry.
              </p>
              <Button className="claim">CLAIM YOUR LISTING ON BLUWBERRY</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <GoToTop />
    </div>
  );
};

export default Home;
