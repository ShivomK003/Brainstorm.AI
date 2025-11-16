"use client";
import React from "react";
import Box from "@/lib/components/layout/Box";
import {
  AlertCircle as AlertCircleIcon,
  CheckCircle2 as CheckCircle2Icon,
  Info as InfoIcon,
  AlertTriangle as AlertTriangleIcon,
  X as XIcon,
} from "lucide-react";

export type AlertVariant = "error" | "success" | "info" | "warning";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  variant?: AlertVariant;
  dismissible?: boolean;
  onClose?: () => void;
  showIcon?: boolean;
  className?: string;
}

const variantStyles: Record<
  AlertVariant,
  {
    container: string;
    title: string;
    icon: string;
    ring: string;
  }
> = {
  error: {
    container: "bg-red-900/60 border-red-500/30 text-red-100",
    title: "text-red-100",
    icon: "text-red-300",
    ring: "ring-red-500/20",
  },
  success: {
    container: "bg-green-900/60 border-green-500/30 text-green-100",
    title: "text-green-100",
    icon: "text-green-300",
    ring: "ring-green-500/20",
  },
  info: {
    container: "bg-blue-900/60 border-blue-500/30 text-blue-100",
    title: "text-blue-100",
    icon: "text-blue-300",
    ring: "ring-blue-500/20",
  },
  warning: {
    container: "bg-amber-900/60 border-amber-500/30 text-amber-100",
    title: "text-amber-100",
    icon: "text-amber-300",
    ring: "ring-amber-500/20",
  },
};

const variantIcon: Record<AlertVariant, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  error: AlertCircleIcon,
  success: CheckCircle2Icon,
  info: InfoIcon,
  warning: AlertTriangleIcon,
};

function Alert({
  title,
  description,
  variant = "error",
  dismissible = false,
  onClose,
  showIcon = true,
  className = "",
  ...rest
}: AlertProps) {
  const Icon = variantIcon[variant];
  const styles = variantStyles[variant];

  return (
    <Box
      role="alert"
      aria-live="polite"
      className={`w-full rounded-lg border px-4 py-3 shadow-md ${styles.container} ${styles.ring} ring-1 flex items-start gap-3 ${className}`}
      {...rest}>
      {showIcon && <Icon className={`mt-[2px] h-5 w-5 shrink-0 ${styles.icon}`} aria-hidden="true" />}

      <div className="flex-1">
        <div className={`font-semibold ${styles.title}`}>{title}</div>
        {description ? <div className="mt-1 text-sm opacity-90">{description}</div> : null}
        {rest.children}
      </div>

      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={onClose}
          className="ml-2 rounded-md p-1 hover:bg-white/10 transition-colors">
          <XIcon className="h-4 w-4 opacity-75" />
        </button>
      )}
    </Box>
  );
}

export default Alert;
