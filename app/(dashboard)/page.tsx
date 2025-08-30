"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
    searchParams: {
        search?: string;
        favorites?: string; // Changed to string as searchParams are always strings
    };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
    const { organization } = useOrganization();

    return (
        <div className="flex-1 h-[calc(100%-80px)] p-5">
            {!organization ? (
                <EmptyOrg />
            ) : (
                // 👇 This is the fix: simply remove the 'query' prop
                <BoardList orgId={organization.id} />
            )}
        </div>
    );
};

export default DashboardPage;