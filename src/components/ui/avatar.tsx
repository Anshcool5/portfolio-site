"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

// Avatar Component
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full border border-gray-300",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

// Avatar Image Component
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// Avatar Fallback Component
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-600 font-semibold",
      className
    )}
    {...props}
  >
    AV
  </AvatarPrimitive.Fallback>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// Example Usage Component
const AvatarDisplay = () => {
  const [text, setText] = React.useState("University Student");

  React.useEffect(() => {
    const messages = ["University Student", "ML Enthusiast", "Cloud Specialist"];
    let index = 0;

    const textLoad = () => {
      index = (index + 1) % messages.length;
      setText(messages[index]);
    };

    const intervalId = setInterval(textLoad, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center py-10">
      <Avatar>
        <AvatarImage src="/converted1.png" alt="Anshul Verma's Avatar" />
        <AvatarFallback>Anshul</AvatarFallback>
      </Avatar>
      <div className="ml-4">
        <p className="text-xl font-semibold">Anshul Verma</p>
        <div className="text-sm text-gray-500">I&apos;m a(n) ⤵️</div>
        <div className="animate-text-change text-lg font-medium">{text}</div>
      </div>
    </div>
  );
};

export { Avatar, AvatarImage, AvatarFallback, AvatarDisplay };
