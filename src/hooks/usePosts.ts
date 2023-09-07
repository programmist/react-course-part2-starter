import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export interface PostQuery {
  pageSize?: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (query: PostQuery) => {
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  const { pageSize: _limit } = query;

  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>(endpoint, { params: { _page: pageParam, _limit } })
        .then((res) => res.data),
    staleTime: 60 * 1000, // 1 min
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePosts;
