import { cn } from "../../../lib/utils/cn";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-auto max-w-5xl px-4", className)}>{children}</div>
  );
};
