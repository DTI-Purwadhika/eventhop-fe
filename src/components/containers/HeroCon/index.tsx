import { Collection, Image } from "@/components/elements";
import { Button } from "@/components/forms";

const HeroCon = () => (
  <section className="relative">
    <Image
      src="/assets/images/banner.jpg"
      alt="hero image"
      width={1344}
      height={768}
      className="relative max-h-[90vh] w-full object-cover object-center rounded-2xl"
    />
    <div className="md:w-2/6 md:bg-gray-800 md:bg-opacity-70 md:rounded-2xl md:py-4 md:ml-4 lg:ml-6 md:text-white flex flex-col justify-center gap-8 mt-6 relative md:absolute md:bottom-4 lg:bottom-8 px-4 md:px-8">
      <h1 className="h2-bold text-left md:text-center lg:text-left">
        Host, Hop, <br className="hidden md:block lg:hidden" />
        Hooray!
      </h1>
      <p className="p-regular-14 lg:p-regular-16 block md:hidden lg:block">
        Every Hopper Invited! Event Hop is more than just an Event s-Hop-ping
        Center, it’s a lively Event Hub where you can hop into any Hopportunity
        Knocks events!
      </p>
      <p className="p-regular-14 lg:p-regular-16 text-left md:text-center lg:text-left">
        Host your own and Hop on the Hooray train!
      </p>
      <Button url="#events" className="md:mx-auto lg:mx-0">
        Hop Now
      </Button>
    </div>
    <div className="hidden md:block md:w-1/6 md:bg-gray-800 md:bg-opacity-70 md:rounded-2xl md:py-4 md:text-white justify-center gap-8 mt-6 relative md:absolute md:bottom-4 md:right-4 lg:right-6 lg:bottom-8 px-4 md:px-8">
      <h4 className="text-2xl font-black text-left mb-4">Hop Here!</h4>
      <Collection filter="" limit={2} type="all_events" isSmall />
    </div>
  </section>
);

export default HeroCon;
