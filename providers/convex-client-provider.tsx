// FILE: providers/convex-client-provider.tsx (The Fix)
"use client";

import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { 
    AuthLoading, 
    Authenticated, 
    Unauthenticated, // <-- 1. Import Unauthenticated
    ConvexReactClient 
} from "convex/react";
import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
    children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
    children,
}: ConvexClientProviderProps) => {
    return (
        // 2. We have REMOVED the extra <ClerkProvider> from here
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
            <AuthLoading>
                <Loading />
            </AuthLoading>
            <Authenticated>
                {children}
            </Authenticated>
            <Unauthenticated> 
                {children} 
            </Unauthenticated> 
            {/* ^-- 3. We tell the app to also render children when unauthenticated */}
        </ConvexProviderWithClerk>
    );
};