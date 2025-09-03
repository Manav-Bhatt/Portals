import { create } from "zustand";
// CHANGE 1: Import the 'Id' type from Convex's generated data model.
import { Id } from "@/convex/_generated/dataModel";

const defaultValues = {
    // CHANGE 2: Update the default 'id' to be typed as an Id<"boards">.
    id: "" as Id<"boards">,
    title: "",
};

interface IRenameModal {
    isOpen: boolean;
    initialValues: typeof defaultValues;
    // CHANGE 3: Update the 'onOpen' function to expect the correct Id type.
    onOpen: (id: Id<"boards">, title: string) => void;
    onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
    isOpen: false,
    onOpen: (id, title) => set({ isOpen: true, initialValues: { id, title } }),
    onClose: () => set({ isOpen: false, initialValues: defaultValues }),
    initialValues: defaultValues,
}));