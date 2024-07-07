import { Input } from "@/components/forms";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const TickerTier = ({ control, index }: { control: any; index: number }) => {
  return (
    <fieldset className="grid md:grid-cols-2 gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">
        Ticket {index + 1}
      </legend>

      <FormField
        control={control}
        name={`ticketTiers.${index}.tier_name`}
        render={({ field }) => (
          <FormItem className="w-full col-span-2">
            <FormControl>
              <Input placeholder="Tier Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`ticketTiers.${index}.price`}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <Input type="number" placeholder="Price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`ticketTiers.${index}.quota`}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <Input type="number" placeholder="Quota" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </fieldset>
  );
};

export default TickerTier;
