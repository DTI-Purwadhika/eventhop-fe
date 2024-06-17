import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => (
  <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">
            Let&apos;s Hop to your next Event with Event Hop!
          </h1>
          <p className="p-regular-16 md:p-regular-18">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            consectetur minus a tempora quidem sit nobis, sequi unde qui
            voluptatem accusantium deleniti repellendus? Alias, nam
            reprehenderit nulla similique temporibus iusto.
          </p>
          <Button asChild size="lg" className="button w-full sm:w-fit">
            <Link href="#events">Explore Now</Link>
          </Button>
        </div>
        <div className="flex w-full justify-end">
          <Image
            src="/assets/images/hero.jpg"
            alt="hero image"
            width={350}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-2xl"
          />
        </div>
      </div>
    </section>
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">
        Trusted By <br /> Thousands of Events
      </h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search CategoryFilter
      </div>
      <Collection
        data={[]}
        emptyTitle="Events Not Found"
        emptyDescription="Sorry, we couldn't find any events matching your search. Please try again with different keywords."
        type="all_events"
        limit={6}
        page={1}
        totalPages={2}
      />
    </section>
  </>
);

export default Home;
