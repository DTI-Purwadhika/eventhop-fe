import { Image } from "@/components/elements";
import { Button } from "@/components/forms";

const HeroCon = () => (
  <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <div className="flex flex-col justify-center gap-8">
        <h1 className="h1-bold">
          Let&apos;s Hop to your next Event with Event Hop!
        </h1>
        <p className="p-regular-16 md:p-regular-18">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          consectetur minus a tempora quidem sit nobis, sequi unde qui
          voluptatem accusantium deleniti repellendus? Alias, nam reprehenderit
          nulla similique temporibus iusto.
        </p>
        <Button url="#events">Explore Now</Button>
      </div>
      <div className="flex w-full justify-end">
        <Image
          src="/assets/images/hero.jpg"
          alt="hero image"
          width={350}
          height={1000}
          className="max-h-[70vh] 2xl:max-h-[50vh] rounded-2xl"
        />
      </div>
    </div>
  </section>
);

export default HeroCon;
