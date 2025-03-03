import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from 'lucide-react';

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="w-full p-2 text-red">
      <Alert className="border-destructive">
        <TriangleAlert className="h-6 w-6" color="hsl(var(--destructive))" />
        <AlertTitle>Desole, une erreur s'est produit</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
};

export default Error;
