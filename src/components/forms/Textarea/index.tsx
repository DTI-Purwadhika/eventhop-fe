import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TextareaType } from "./type";

const TextareaCom = ({ label, placeholder }: TextareaType) => (
  <>
    <Label>{label}</Label>
    <Textarea
      placeholder={placeholder}
      className="textarea rounded-lg h-36 md:h-48 lg:h-64"
    />
  </>
);
export default TextareaCom;