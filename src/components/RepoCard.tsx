import type { Repository } from "../types/Repository"

type Props = {
  repo: Repository
}

function RepoCard({ repo }: Props) {
  return (
    <div className="group card p-6 flex flex-col justify-between h-full bg-white">
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-3">
          <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
            {repo.name}
          </h2>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 rounded-full border border-amber-100 flex-shrink-0">
            <svg 
              className="w-4 h-4 text-amber-500 fill-amber-500" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-sm font-bold text-amber-700">{repo.stars.toLocaleString()}</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]">
          {repo.description || "No description provided."}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {repo.language && (
            <>
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{repo.language}</span>
            </>
          )}
        </div>
        
        <a 
          href={repo.url} 
          rel="noopener noreferrer" 
          target="_blank" 
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 group/link"
        >
          Explore
          <svg 
            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7 7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default RepoCard
