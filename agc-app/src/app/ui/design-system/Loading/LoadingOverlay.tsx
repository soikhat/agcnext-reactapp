import { Spinner } from "./Spinner";

export const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-70 flex items-center justify-center">
      <Spinner size={48} />
    </div>
  );
};
