"use client";
import { Image } from "@/components/elements";
import { Input } from "@/components/forms";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/shares/libs/utils";
import { useEffect, useState } from "react";

const Search = ({ placeholder = "Search Event" }: { placeholder?: string }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "search",
          value: search,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["search"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 625);

    return () => clearTimeout(delayDebounceFn);
  }, [search, searchParams, router]);

  return (
    <div className="flex-center w-full overflow-hidden rounded-lg px-4 border">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Input
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
        className="p-regular-16 border-0 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};
export default Search;
