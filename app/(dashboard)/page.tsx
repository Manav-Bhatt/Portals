// FILE: app/(dashboard)/page.tsx (The Final Fix)
"use client";

// 1. Import useSearchParams from next/navigation
import { useSearchParams } from "next/navigation"; 
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

// 2. We no longer need searchParams in the props
const DashboardPage = () => { 
    const { organization } = useOrganization();
    
    // 3. Use the hook to get the search parameters
    const searchParams = useSearchParams();
    
    // 4. Create a clean query object from the parameters
    const query = {
        search: searchParams.get("search") || undefined,
        favorites: searchParams.get("favorites") || undefined,
    };

    return (
        <div className="flex-1 h-[calc(100%-80px)] p-5">
            {!organization ? (
                <EmptyOrg />
            ) : (
                // 5. Pass the newly created query object
                <BoardList orgId={organization.id} query={query} />
            )}
        </div>
    );
};

export default DashboardPage;