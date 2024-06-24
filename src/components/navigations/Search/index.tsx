"use client";
import { Image } from "@/components/elements";
import { Input } from "@/components/forms";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/libs/utils";
import { useEffect, useState } from "react";

const Search = ({ placeholder = "Search Event" }: { placeholder?: string }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router]);

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 ">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Input
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};
export default Search;
