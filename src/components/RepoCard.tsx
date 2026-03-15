import type { Repository } from "../types/Repository"
type Props = {
  repo: Repository
}
function RepoCard({ repo }: Props) {
  return (
    <div className="flex flex-col text-center justify-center min-w-20 p-3 border-2 rounded-md bg-purple-300 ">

      <h1 className="text-lg">{repo.name}</h1>
      <h1 className="text-sm">{repo.description}</h1>
      <h1 className="text-sm">{repo.stars}</h1>
      <h1 className="text-sm">{repo.language}</h1>
    </div>
  )
}

export default RepoCard
