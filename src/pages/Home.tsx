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
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          GitWatcher
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore the world's most popular repositories. Just enter a name to get started.
        </p>
      </header>

      <div className="max-w-2xl mx-auto">
        <SearchBar query={query} updateQuery={updateQuery} />
      </div>

      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="order-2 sm:order-1">
            {(!loading && repositories.length > 0 && !error && query !== "") &&
              <SearchSummary length={repositories.length} query={query} />
            }
          </div>

          <div className="order-1 sm:order-2 w-full sm:w-auto">
            {(!loading && repositories.length > 0 && !error && query !== "") &&
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Sort by</span>
                <select 
                  value={sortOption} 
                  onChange={(e) => setSortOption(e.target.value)} 
                  className="w-full sm:w-auto pl-3 pr-10 py-2 text-sm border border-slate-200 rounded-lg bg-white hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all appearance-none cursor-pointer"
                >
                  <option value="stars">Most Stars</option>
                  <option value="name">Repository Name</option>
                </select>
              </div>
            }
          </div>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-10 h-10 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium tracking-wide">Fetching repositories...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <p className="text-red-700 font-medium">Error: Could not fetch repositories. Please try again later.</p>
          </div>
        )}

        {(!loading && !error && repositories.length > 0) && (
          <RepoList repositories={sortedRepositories} />
        )}

        {(!loading && !error && query !== "" && repositories.length === 0) && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No repositories found for "{query}".</p>
          </div>
        )}

        {(!error && repositories.length > 0) && (
          <div className="flex items-center justify-center gap-6 pt-8 border-t border-slate-200">
            <button
              className={`p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${page === 1 ? 'invisible' : ''}`}
              onClick={() => setPage((p) => p - 1)}
              disabled={loading}
              title="Previous Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Page</span>
              <span className="text-lg font-bold text-slate-900">{page}</span>
            </div>

            <button
              className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              onClick={() => setPage((p) => p + 1)}
              disabled={loading}
              title="Next Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
