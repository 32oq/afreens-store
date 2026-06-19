"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/helpers";
import type { ReactNode } from "react";

interface CardProps extends React.ComponentProps<typeof motion.div> {
	children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.45, ease: "easeOut" }}
			className={cn("rounded-[1rem] border border-black/5 bg-white p-6 shadow-[0_40px_100px_rgba(25,23,22,0.06)]", className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}
