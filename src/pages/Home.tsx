import SearchBar from "../components/SearchBar"
import RepoList from "../components/RepoList";
import { useRepositories } from "../hooks/useRepositories";
import { useState } from "react";
import SearchSummary from "../components/SearchSummary";
import type { Repository } from "../types/Repository";
function Home() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<string>("");

  function updateQuery(newQuery: string) {
    setQuery(newQuery);
    setPage(1);

  }
  const { repositories, loading, error } = useRepositories(query, page);
  const [sortOption, setSortOption] = useState("stars");
  let sortedRepositories: Repository[] = repositories;
  if (sortOption === "stars") {

    sortedRepositories = [...sortedRepositories].sort((a, b) => b.stars - a.stars);


  }
  else if (sortOption === "name") {

    sortedRepositories = [...sortedRepositories].sort((a, b) => a.name.localeCompare(b.name))

  }


  return (
    <div>

      <h1 className="flex justify-center text-2xl mt-5 text-rose-600">Github Repository Explorer</h1>
      <SearchBar query={query} updateQuery={updateQuery} />
      {query !== "" &&
        <h3 className="flex justify-center mt-5 text-md font-bold">Searching For : "{query}"</h3>
      }

      <div className="flex my-4 justify-between items-center">

        {(!loading && repositories.length > 0 && !error && query !== "") &&
          <SearchSummary length={repositories.length} query={query} />
        }

        {(!loading && repositories.length > 0 && !error && query !== "") &&
          <select name="" value={sortOption} onChange={(e) => {
            setSortOption(e.target.value);
          }} className="mr-10 min-w-fit text-right justify-center flex  border-2" id="">
            <option value="name"  >Sort By Name</option>
            <option value="stars"  >Sort By Stars</option>
          </select>
        }
      </div>


      {
        (loading) &&
        <h1 className="text-green-400">Loading...</h1>
      }
      {
        (error) &&

        <h1 className="text-red-400">Error: Could not fetch repository.</h1>
      }
      {
        (!loading && !error && repositories.length > 0) &&

        <RepoList repositories={sortedRepositories} />
      }
      {
        (!loading && !error && query !== "" && repositories.length === 0) &&
        <h1 className="text-red-400">No repositories found for {query}.</h1>
      }
      {(!loading && !error && repositories.length > 0) &&

        <div className="flex justify-center gap-8 text-blue-800">

          {(page > 1) &&
            <button
              className="hover:underline cursor-pointer"
              onClick={() => {
                setPage((p) => p - 1)
              }}
            >Prev</button>
          }
          <span>{page}</span>
          <button
            className="hover:underline cursor-pointer"
            onClick={() => {
              setPage((p) => p + 1)
            }}
          >Next</button>

        </div>
      }

    </div >
  )
}

export default Home
