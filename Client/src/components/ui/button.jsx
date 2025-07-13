import React from "react";
import { cn } from "@/lib/utils";

const Button = ({
  variant = "default",
  className = "",
  children,
  asChild = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const variantClasses = {
    default: "bg-black text-white hover:bg-zinc-800",
    outline:
      "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;
