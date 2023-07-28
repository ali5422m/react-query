import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Todo} from "./useTodos.ts";
import axios from "axios";
import {CACHE_KEY_TODOS} from "../constants.ts";

interface AddTodoContext {
    previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) =>
            axios
                .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
                .then((res) => res.data),

        onMutate: (newTodo: Todo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
            queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
                newTodo,
                ...todos,
            ]);

            onAdd();

            return {previousTodos};
        },
        onSuccess: (savedTodo, newTodo) => {
            // Approach: Invalidating the cache
            // access to queryClient in main.tsx

            // queryClient.invalidateQueries({
            //     queryKey: ['todos']
            // })

            //Approach 2: Updating the data in the cache
            queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map((todo) =>
                    todo === newTodo ? savedTodo : todo
                )
            );
        },

        onError: (error, newTodo, context) => {
            if (!context) return;

            queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos)
        }
    });
}

export default useAddTodo;