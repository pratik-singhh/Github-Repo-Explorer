import RepoCard from "./RepoCard"
import type { Repository } from "../types/Repository";

type Props = {
  repositories: Repository[]
}

function RepoList({ repositories }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repositories.map((element) => (
        <RepoCard
          key={`${element.name}-${element.url}`}
          repo={element}
        />
      ))}
    </div>
  )
}

export default RepoList
