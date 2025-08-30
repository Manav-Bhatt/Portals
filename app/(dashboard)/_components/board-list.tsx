"use client";

import { useSearchParams } from "next/navigation"; // 1. Import the hook
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
    orgId: string;
    // 2. Remove the query prop from here
}

export const BoardList = ({ orgId }: BoardListProps) => {
    const data = []; // TODO: Change to API Call

    // 3. Use the hook to get the search params
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search");
    const favoritesQuery = searchParams.get("favorites");

    // 4. Update the conditions to use the new variables
    if (!data.length && searchQuery) {
        return <EmptySearch />;
    }
    if (!data.length && favoritesQuery) {
        return <EmptyFavorites />;
    }
    if (!data.length) {
        return <EmptyBoards />;
    }

    return (
        <div>
            {/* Your board list content will go here */}
        </div>
    );
};