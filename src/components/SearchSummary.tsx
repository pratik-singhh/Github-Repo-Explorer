type Props = {
  length: number
  query: string
}

function SearchSummary({ length, query }: Props) {
  return (
    <div className="flex items-center gap-2 text-slate-500">
      <span className="text-sm font-medium uppercase tracking-wider">Results for</span>
      <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">"{query}"</span>
      <span className="text-sm px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md font-bold ml-1">{length} found</span>
    </div>
  )
}

export default SearchSummary
