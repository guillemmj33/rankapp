import { useEffect, useState } from "react";
import { ResultContainer} from "./ResultContainer"
// import data from "../../data/data";
import { SearchBarStyle,SearchContainer } from "./Search_style";
import dataAPI from '../../data/dataAPI.json';

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query !== "") {
      const out = dataAPI.data
        .filter((item) =>
          item.app_name.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.app_name);
      setSuggestions(out);
    }
  }, [query]);

  return (
    <div>
      <SearchContainer>
      <SearchBarStyle>
      <ResultContainer suggestions={suggestions} onChange={(val) => setQuery(val)} />
      </SearchBarStyle>
      </SearchContainer>
    </div>
  );
}



