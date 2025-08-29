// in your invite-button.tsx file

import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import {
    Dialog,
    DialogContent,
    DialogHeader,      // Import DialogHeader
    DialogTitle,       // Import DialogTitle
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Invite members
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
                {/* 👇 Add a hidden title for screen readers */}
                <DialogHeader>
                    <DialogTitle className="sr-only">Organization Settings</DialogTitle>
                </DialogHeader>
                <OrganizationProfile routing="hash" />
            </DialogContent>
        </Dialog>
    );
};