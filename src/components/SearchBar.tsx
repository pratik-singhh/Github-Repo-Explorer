type Props = {
  query: string
  updateQuery: (word: string) => void

}
function SearchBar(props: Props) {
  return (
    <div className="flex justify-center mt-5">
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.updateQuery(e.target.value)} className="p-1 border-2 rounded-md max-w-xl text-center" value={props.query} placeholder="Enter Repo Name" />
    </div>
  )
}

export default SearchBar
