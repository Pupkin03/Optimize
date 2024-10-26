import "./Search.css";
import { IoSearch } from "react-icons/io5";


const Search = () => {
  return (
    <div className="search">
      <p>Search for any business in Africa</p>
      <form>
        <i><IoSearch size={24} color="black" /></i>
        <input type="text" ></input>
        <button type="submit">Search</button>
      </form>
      

    </div>
  )
}

export default Search