import "./categories.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RespNavbar from "../../components/navbar/RespNavbar";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Categories = () => {
  const [query, setQuery] = useState("");
  const { data, loading } = useFetch("/categories");

  return (
    <div className="Categories">
      <RespNavbar />
      <div className="listBackImg">
        <div className="listContainer">
          <Navbar />
          <h1 className="listTitle">Software Categories</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <KeyboardArrowRightIcon style={{ fontSize: "20px" }} />
            <span>Categories</span>
          </div>
        </div>
      </div>

      <div className="catSearch">
        <input
          type="text"
          placeholder="Search Software"
          onChange={(e) => setQuery(e.target.value)}
        />
        <span>
          <SearchOutlinedIcon className="catIconSearch" />
        </span>
      </div>

      <div className="container">
        {loading ? (
          "loading"
        ) : (
          <>
            {data
              .filter((category) =>
                category.name.toLowerCase().includes(query.toLowerCase())
              )
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((category) => (
                <div key={category._id}>
                  <Link to={`/softwares?catName=${category.name}`}>
                    <div className="catList">
                      {category.name}
                      <KeyboardArrowRightIcon style={{ fontSize: "20px" }} />
                    </div>
                  </Link>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
