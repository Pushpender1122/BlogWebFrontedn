import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
const ApiUrl= import.meta.env.VITE_Server_URL || 'http://localhost:3001';
const getAllArticles = async () => {
  const {data} = await axios.get(`${ApiUrl}/api/articles/feed`);

  console.log("getCurrentUser", { data });

  return data;
};

function useArticlesQuery() {
  const {
    isLoading: isArticlesLoading,
    data: articles,
    error: ArticlesError,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles,
    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0,
  });
  return {
    isArticlesLoading,
    articles,
    ArticlesError,
  };
}

export default useArticlesQuery;
