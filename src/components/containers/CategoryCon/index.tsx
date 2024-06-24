"use client";
import { Category, Collection } from "@/components/elements";
import { Search } from "@/components/navigations";
import { Heading } from "@/components/typhographies";
import { useState } from "react";

const CategoryCon = () => {
  const [category, setCategory] = useState("all");
  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <Heading size="h2">Find your suitable Event!</Heading>
      <Search />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Heading size="h4">Price Range</Heading>
        <Heading size="h4">Date Range</Heading>
      </div>
      <Category category={category} setCategory={setCategory} />
      <Collection
        filter=""
        category={category}
        limit={4}
        type="all_events"
        emptyTitle="No Events in This Category"
        emptyDescription="Try choose another category."
      />
    </section>
  );
};

export default CategoryCon;
