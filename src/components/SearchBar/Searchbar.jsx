import { useEffect, useState } from "react";
import { ResultContainer} from "./ResultContainer"
import data from "../../data/data";
import { SearchBarStyle } from "./Search_style";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query !== "") {
      const out = data
        .filter((item) =>
          item.name.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.name);
      setSuggestions(out);
    }
  }, [query]);

  return (
    <div>
      <SearchBarStyle>
      <ResultContainer suggestions={suggestions} onChange={(val) => setQuery(val)} />
      </SearchBarStyle>
    </div>
  );
}



