import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface PostQuery {
  page: number;
  pageSize: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (query: PostQuery) => {
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  const { page: _page, pageSize: _limit } = query;

  return useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get<Post[]>(endpoint, { params: { _page, _limit } })
        .then((res) => res.data),
    staleTime: 60 * 1000, // 1 min
    keepPreviousData: true,
  });
};

export default usePosts;
