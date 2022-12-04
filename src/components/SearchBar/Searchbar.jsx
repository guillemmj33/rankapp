import { useEffect, useState } from "react";
import { ResultContainer} from "./ResultContainer"
import dataAPI from "../../data/dataAPI.json";
import { SearchBarStyle, SearchContainer } from "./Search_style";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    //creamos una variable llamada 'data' para acceder a los objetos del array
    let data = dataAPI.data;
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



