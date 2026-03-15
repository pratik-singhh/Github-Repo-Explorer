import RepoCard from "./RepoCard"
import type { Repository } from "../types/Repository";
function RepoList() {
  const exInfo: Repository[] = [
    {
      name: "Movie",
      description: "Book",
      stars: "****",
      language: "eng",

    },
    {
      name: "Food",
      description: "Order",
      stars: "***",
      language: "eng",

    },
    {
      name: "Game",
      description: "Play",
      stars: "*****",
      language: "hin",

    },
    {
      name: "Song",
      description: "Listen",
      stars: "*****",
      language: "eng",

    },

  ];
  return (
    <div className="flex m-4 gap-3 justify-center ">
      {exInfo.map((element) =>

        <RepoCard
          key={element.name}
          repo={element}
        />
      )}

    </div>
  )
}

export default RepoList
