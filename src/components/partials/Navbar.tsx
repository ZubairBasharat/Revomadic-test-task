import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Menu, Printer, Search } from "lucide-react";
import { useState } from "react";
import SearchDialog from "../common/SearchDialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useDashboardUser } from "@/hooks/useDashboardUser";
import { Skeleton } from "@/components/ui/skeleton";
import SearchBar from "../common/Searchbar";

export function DashboardHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { data: user, isLoading, isError, error } = useDashboardUser();

  return (
    <>
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-2 py-6 px-4">
            {/* Top row */}
            <div className="flex flex-row gap-4">
              <div className="pr-2 border-r border-gray-400 w-max">
                <Menu className="h-5 w-5 text-gray-600" />
              </div>

              <Breadcrumb className="flex flex-row font-medium">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="text-gray-400">
                      Dashboard
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-gray-400" />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="text-black">
                      Overview
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Main row */}
            <div className="flex flex-row items-center justify-between mt-2 gap-4">
              {/* Welcome */}
              <div className="flex flex-row gap-2">
                <h1 className="text-2xl font-medium">Welcome Back,</h1>
                {isLoading ? (
                  <Skeleton className="h-6 w-24 rounded-md" />
                ) : isError ? (
                  <span className="text-red-500 text-sm">
                    {(error as Error).message}
                  </span>
                ) : (
                  <h1 className="text-2xl font-medium">{user?.name}</h1>
                )}
              </div>

              {/* Desktop search */}
              <SearchBar placeholderText="Search across campaigns, partners, or assets..." />

              {/* Mobile search & meta */}
              <div className="flex flex-row items-center gap-2">
                <div
                  onClick={() => setSearchOpen(true)}
                  className="lg:hidden rounded-full border border-gray-200 bg-card hover:bg-gray-100 p-2 cursor-pointer"
                >
                  <Search className="h-5 w-5 text-gray-600" />
                </div>

                <div className="lg:hidden">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 cursor-pointer">
                        <MoreVertical className="h-5 w-5 text-gray-600" />
                      </button>
                    </PopoverTrigger>

                    <PopoverContent
                      align="end"
                      className="w-56 flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <Printer className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Print</span>
                      </div>

                      {isLoading ? (
                        <Skeleton className="h-4 w-32" />
                      ) : isError ? (
                        <span className="text-red-500 text-sm">
                          {(error as Error).message}
                        </span>
                      ) : (
                        <>
                          <div className="text-sm">
                            <span className="text-muted-foreground">NAME:</span>{" "}
                            <span className="font-medium">{user?.name}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">ID:</span>{" "}
                            <span className="font-medium">{user?.id}</span>
                          </div>
                          <Badge
                            variant="outline"
                            className="w-fit bg-green-100 text-green-600"
                          >
                            <span className="mr-1">Status:</span>
                            <span className="text-black">{user?.status}</span>
                          </Badge>
                        </>
                      )}
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Right meta (desktop) */}
                <div className="hidden lg:flex items-center gap-3 text-sm">
                  {isLoading ? (
                    <Skeleton className="h-4 w-24" />
                  ) : isError ? (
                    <span className="text-red-500 text-sm">
                      {(error as Error).message}
                    </span>
                  ) : (
                    <>
                      <Badge
                        variant="outline"
                        className="rounded-full p-1 bg-gray-50 cursor-pointer"
                      >
                        <Printer className="h-5 w-5 text-gray-400 " />
                      </Badge>

                      <Badge
                        variant="outline"
                        className="rounded-full px-3 py-1 bg-gray-50"
                      >
                        <span className="text-muted-foreground mr-1">
                          NAME:
                        </span>
                        <span>{user?.name}</span>
                      </Badge>

                      <Badge
                        variant="outline"
                        className="rounded-full px-3 py-1 bg-gray-50"
                      >
                        <span className="text-muted-foreground mr-1">ID:</span>
                        <span>{user?.id}</span>
                      </Badge>

                      <Badge
                        variant="outline"
                        className="rounded-full px-3 py-1 bg-green-100 text-green-600"
                      >
                        <span className="mr-1">Status:</span>
                        <span className="text-black">{user?.status}</span>
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search dialog (mobile only behavior, but safe everywhere) */}
      <SearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        placeholderText="Search across campaigns, partners, or assets..."
      />
    </>
  );
}
