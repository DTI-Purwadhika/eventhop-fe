import { Input, Button } from "@/components/forms";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useFormContext, UseFieldArrayRemove } from "react-hook-form";

const TickerTier = ({
  control,
  index,
  remove,
}: {
  control: any;
  index: number;
  remove: UseFieldArrayRemove;
}) => {
  const [free, setFree] = useState(false);
  const [tierName, setTierName] = useState("");
  const [oldPrice, setOldPrice] = useState(0);
  const { setValue } = useFormContext();

  const toggleFree = () => {
    setFree((prevFree) => {
      const newFree = !prevFree;

      if (newFree) {
        setValue(`ticketTiers.${index}.price`, 0);
      } else {
        setValue(`ticketTiers.${index}.price`, oldPrice);
      }

      return newFree;
    });
  };

  return (
    <fieldset className="grid md:grid-cols-2 gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">
        {tierName ? tierName : `Tier ${index + 1}`}
      </legend>
      <FormField
        control={control}
        name={`ticketTiers.${index}.tier_name`}
        render={({ field }) => (
          <FormItem className="w-full col-span-2">
            <FormControl>
              <Input
                placeholder="Name of the tier..."
                label="Tier Name"
                {...field}
                onBlur={() => setTierName(field.value)}
              />
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
              <>
                <Input
                  type="number"
                  placeholder="How much..?"
                  label="Ticket Price"
                  {...field}
                  isDisabled={free}
                  onBlur={() => setOldPrice(field.value)}
                  value={field.value}
                />
                <Label className="flex items-center">
                  <Checkbox
                    className="border border-slate-400"
                    onClick={() => toggleFree()}
                    checked={free}
                  />
                  <span className="ml-2 text-sm text-slate-700">
                    Free Event
                  </span>
                </Label>
              </>
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
              <Input
                type="number"
                placeholder="How many tickets..?"
                label="Ticket Quota"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex col-span-2 justify-end">
        <Button
          type="button"
          onClick={() => remove(index)}
          variant="destructive"
          size={"sm"}
        >
          Remove Tier
        </Button>
      </div>
    </fieldset>
  );
};

export default TickerTier;
