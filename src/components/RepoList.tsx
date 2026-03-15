import RepoCard from "./RepoCard"
import type { Repository } from "../types/Repository";
type Props = {
  repositories: Repository[]
}
function RepoList({ repositories }: Props) {
  return (
    <div className=" flex flex-col m-4 gap-3 justify-center ">
      {repositories.map((element) =>

        <RepoCard
          key={element.name}
          repo={element}
        />
      )}

    </div>
  )
}

export default RepoList
