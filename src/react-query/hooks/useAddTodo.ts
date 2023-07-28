import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CACHE_KEY_TODOS} from "../constants.ts";
import todoService, {Todo} from "../services/todoService.ts";

interface AddTodoContext {
    previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todoService.post,

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