import { useState } from "react";
import { useMutation } from "convex/react";
// THIS IS THE CORRECT IMPORT PATH
import { FunctionReference } from "convex/server";

export const useApiMutation = <T extends FunctionReference<"mutation">>(mutationFunction: T) => {
    const [pending, setPending] = useState(false);
    const apiMutation = useMutation(mutationFunction);

    const mutate = async (payload: Parameters<typeof apiMutation>[0]) => {
        setPending(true);
        return await apiMutation(payload)
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            })
            .finally(() => setPending(false));
    };

    return { mutate, pending };
};