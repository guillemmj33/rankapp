import { useEffect, useState } from "react";
import { ResultContainer} from "./ResultContainer"
import data from "../../data/data";

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
    <div className="App">
      <ResultContainer suggestions={suggestions} onChange={(val) => setQuery(val)} />
    </div>
  );
}



