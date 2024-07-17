import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardType } from "./type";
import Icon from "@/shares/assets/Icon";

const CardCon = ({ title, icon, result, description }: CardType) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon name={icon} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-nowrap">{result}</div>
        <p className="text-xs text-muted-foreground text-nowrap">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
export default CardCon;
