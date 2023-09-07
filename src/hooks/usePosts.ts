import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  return useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: () =>
      axios
        .get<Post[]>(endpoint, { params: { userId } })
        .then((res) => res.data),
    staleTime: 60 * 1000, // 1 min
  });
};

export default usePosts;
