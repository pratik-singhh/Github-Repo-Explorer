import SearchBar from "../components/SearchBar"
import RepoList from "../components/RepoList";
import { useState, useEffect } from "react";
import SearchSummary from "../components/SearchSummary";
function Home() {
  const [query, setQuery] = useState<string>("");

  function updateQuery(newQuery: string) {
    setQuery(newQuery);

  }

  return (
    <div>

      <h1 className="flex justify-center text-2xl mt-5 text-rose-600">Github Repository Explorer</h1>
      <SearchBar query={query} updateQuery={updateQuery} />
      {query !== "" &&
        <h3 className="flex justify-center mt-5 text-md font-bold">Searching For : "{query}"</h3>
      }
      <SearchSummary />

      <RepoList />

    </div>
  )
}

export default Home
