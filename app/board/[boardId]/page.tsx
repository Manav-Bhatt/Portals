import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";


import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: Promise<{ boardId: string }>;
}

// 1. Added the "async" keyword
const BoardIdPage = async ({ params }: BoardIdPageProps) => {
    // 2. "await"-ed the params promise to get the actual values
    const resolvedParams = await params;
    
    return (


        // 3. Used the new "resolvedParams" variable
        <Room roomId={resolvedParams.boardId} fallback={<Loading />}>


            <Canvas boardId={resolvedParams.boardId} />


        </Room>


    );
};

export default BoardIdPage;