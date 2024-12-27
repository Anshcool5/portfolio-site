"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

// Avatar Component
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full border border-gray-300", // Updated size and border
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

// Avatar Image Component
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("h-full w-full object-cover", className)} // Ensures image scales properly
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

// Avatar Fallback Component
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-600 font-semibold", // Fallback with styling
      className
    )}
    {...props}
  >
    AV
  </AvatarPrimitive.Fallback>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// Example Usage Component
const AvatarDisplay = () => (
  <div className="flex items-center justify-center py-10">
    <Avatar>
      <AvatarImage src="/converted1.png" alt="Centered Avatar Image" />
      <AvatarFallback>Anshul</AvatarFallback>
    </Avatar>
    <div className="ml-4">
      <p className="text-xl font-semibold">Anshul Verma</p>
      <div className="text-sm text-gray-500">I'm a(n) ⤵️</div>
      <div className="animate-text-change text-lg font-medium">University Student</div>
    </div>
  </div>
)

// Text Animation Logic (Optional JS integration like your HTML)
React.useEffect(() => {
  const textElement = document.querySelector(".animate-text-change") as HTMLElement
  if (!textElement) return

  const textLoad = () => {
    setTimeout(() => {
      textElement.textContent = "University Student"
    }, 0)
    setTimeout(() => {
      textElement.textContent = "ML Enthusiast"
    }, 4000)
    setTimeout(() => {
      textElement.textContent = "Cloud Specialist"
    }, 8000)
  }

  textLoad()
  const intervalId = setInterval(textLoad, 12000)
  return () => clearInterval(intervalId)
}, [])

export { Avatar, AvatarImage, AvatarFallback, AvatarDisplay }
