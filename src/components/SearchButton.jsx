import SearchIcon from "../assets/SearchIcon.png";
const SearchButton = ({ onClick }) => {
  return (
    <img
      src={SearchIcon}
      alt=""
      style={{ width: "20px", height: "20px" }}
      onClick={onClick}
    />
  );
};

export default SearchButton;
