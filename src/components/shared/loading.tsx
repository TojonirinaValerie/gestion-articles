import { InfinitySpin } from "react-loader-spinner";

type LoadingProps = {
  width?: string
}
const Loading: React.FC<LoadingProps> = ({width}) => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full mt-1">
      <InfinitySpin
        width={width ? width : "200"}
        color="hsl(var(--primary))"
      />
    </div>
  );
};

export default Loading;
