import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = () => {
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => axios.get<Post[]>(endpoint).then((res) => res.data),
    staleTime: 60 * 1000, // 1 min
  });
};

export default usePosts;
