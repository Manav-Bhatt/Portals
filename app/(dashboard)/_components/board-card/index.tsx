"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
// CHANGE 1: Import the 'Id' type from Convex's generated data model.
import { Id } from "@/convex/_generated/dataModel";

import { Skeleton } from "@/components/ui/skeleton";

import { Overlay } from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Actions } from "@/components/actions";
import { useApiMutation } from "@/app/hooks/use-api-mutation";


import { api } from "@/convex/_generated/api";


import { toast } from "sonner";


import { MoreHorizontal } from "lucide-react";

interface BoardCardProps {
    // CHANGE 2: Update the 'id' prop from 'string' to the specific 'Id<"boards">' type.
    id: Id<"boards">;
    title: string;
    authorName: string;
    authorId: string;
    createdAt: number;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean;
}

export const BoardCard = ({
    id,
    title,
    imageUrl,
    authorId,
    authorName,
    createdAt,
    orgId,
    isFavorite,
}: BoardCardProps) => {
    const { userId } = useAuth();

    const authorLabel = authorId === userId ? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });
    const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
        api.board.favorite
    );
    const { mutate: onUnFavorite, pending: pendingUnFavorite } = useApiMutation(
        api.board.unfavorite
    );

    const toggleFavorite = async () => {
        if (isFavorite) {
            await onUnFavorite({ id }).catch(() =>
                toast.error("Failed to unfavorite")
            );
        } else {
            await onFavorite({ id, orgId }).catch(() =>
                toast.error("Failed to favorite")
            );
        }
    };

    return (
        <Link href={`/board/${id}`}>
            <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-center overflow-hidden">
                <div className="relative flex-1 bg-amber-50">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-fit"
                    />
                    <Overlay />
                    <Actions
                        id={id}
                        title={title}
                        side="bottom"
                        sideOffset={-15}
                        alignOffset={22}
                    >
                        <button
                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <MoreHorizontal 
                                className="text-white opacity-75 hover:opacity-100 transition-opacity"
                                size={24}
                            />
                        </button>
                    </Actions>
                </div>
                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    authorLabel={authorLabel}
                    createdAtLabel={createdAtLabel}
                    onClick={toggleFavorite}
                    disabled={pendingFavorite || pendingUnFavorite}
                />
            </div>
        </Link>
    );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="aspect-[100/127] rounded-lg overflow-hidden animate-shimmer bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%]">
            <Skeleton className="w-full h-full" />
        </div>
    );
};