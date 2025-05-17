import * as React from "react";
import { useIsClient } from "usehooks-ts";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Skeleton } from "../ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export function ModeToggleTab() {
    const isClient = useIsClient();
    const { theme, setTheme } = useTheme();

    if (!isClient) return <ModeToggleSkeleton />;

    return (
        <>
            <Tabs defaultValue={theme}>
                <TabsList className="bg-current/50">
                    <TabsTrigger value="light" onClick={() => setTheme("light")}>
                        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
                    </TabsTrigger>
                    {/* <TabsTrigger value="system" onClick={() => setTheme("system")}>
                        <Monitor className=" h-[1.2rem] w-[1.2rem] transition-all" />
                    </TabsTrigger> */}
                    <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
                        <Moon className=" h-[1.2rem] w-[1.2rem] transition-all" />
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </>
    );
}

export function ModeToggleSkeleton() {
    return (
        <div>
            <Skeleton className="w-[137px] h-[40px] p-1" />
        </div>
    );
}
