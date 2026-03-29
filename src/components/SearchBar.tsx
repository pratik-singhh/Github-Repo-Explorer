type Props = {
  query: string
  updateQuery: (word: string) => void
}

function SearchBar({ query, updateQuery }: Props) {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg 
          className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
      </div>
      <input 
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateQuery(e.target.value)} 
        className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all shadow-sm group-hover:border-slate-300" 
        value={query} 
        placeholder="Search for a repository..." 
      />
    </div>
  )
}

export default SearchBar
