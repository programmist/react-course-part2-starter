import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../react-query/constants";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const endpoint = "https://jsonplaceholder.typicode.com/todos";
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () => axios.get<Todo[]>(endpoint).then((res) => res.data),
    staleTime: 10 * 1000,
  });
};

export default useTodos;
