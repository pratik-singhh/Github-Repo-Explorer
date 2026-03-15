type Props = {
  length: number
  query: string
}
function SearchSummary(props: Props) {
  const { length, query } = props;

  return (
    <div>
      <h3 className="ml-10">{length} Repositories Found for "{query}"</h3>
    </div>
  )
}

export default SearchSummary
