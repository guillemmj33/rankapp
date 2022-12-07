import { useEffect, useState } from "react";
import { ResultContainer} from "./ResultContainer"
import dataAPI from "../../data/dataAPI.json";
import { SearchBarStyle, SearchContainer,ListSearchBar, LinkStyleSearchBAr } from "./Search_style";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    //creamos una variable llamada 'data' para acceder a los objetos del array
    if (query !== "") {
      const out = dataAPI.data
        .filter((itemname) =>
          itemname.app_name.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((itemname) => <ListSearchBar>
        <LinkStyleSearchBAr href={itemname.app_developer_website} target="_blank" rel="noopener noreferrer">{itemname.app_name}</LinkStyleSearchBAr> 
      </ListSearchBar>);
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



