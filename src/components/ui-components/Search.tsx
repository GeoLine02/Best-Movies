import Input from "../ui/Input";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div>
      <Input
        background="gray"
        icon={<FiSearch size={20} />}
        size="medium"
        type="text"
        placeholder="Search movies"
        rounded
        direction="ltr"
      />
    </div>
  );
};

export default Search;
