import type { Repository } from "../types/Repository";
import { searchRepositories } from "../services/githubApi";
import { useState, useEffect } from "react";
export function useRepositories(query: string, page: number): { repositories: Repository[], loading: boolean, error: boolean } {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    async function fetchRepositories() {
      setLoading(true);
      setError(false);

      try {
        setRepositories(await searchRepositories(query, page));
      } catch (error) {
        console.error(error);
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }

    if (query.trim() === "") {
      setRepositories([]);
      return;
    }
    const debouncer = setTimeout(() => {
      fetchRepositories()
    }, 500);
    return (() => {
      clearTimeout(debouncer);
    })

  }, [query, page])

  return { repositories, loading, error };
}
