"use client";
import React from "react";
import { createPortal } from "react-dom";
import Alert, { AlertVariant } from "./Alert";
import { AnimatePresence, motion } from "framer-motion";

export type ShowAlertOptions = {
  title: string;
  description?: string;
  variant?: AlertVariant;
  durationMs?: number | null; // null disables auto-dismiss
};

type AlertInternalState =
  | (ShowAlertOptions & {
      dismissible?: boolean;
    })
  | null;

type AlertContextValue = {
  showAlert: (options: ShowAlertOptions) => void;
  hideAlert: () => void;
};

const AlertContext = React.createContext<AlertContextValue | undefined>(undefined);

export function useAlert() {
  const ctx = React.useContext(AlertContext);
  if (!ctx) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return ctx;
}

export default function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = React.useState<AlertInternalState>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    setIsMounted(true);
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const hideAlert = React.useCallback(() => {
    setAlert(null);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const showAlert = React.useCallback(
    (options: ShowAlertOptions) => {
      const { durationMs = 5000 } = options;
      setAlert({ ...options, dismissible: true });

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      if (durationMs !== null) {
        timeoutRef.current = window.setTimeout(() => {
          hideAlert();
        }, durationMs);
      }
    },
    [hideAlert]
  );

  const value = React.useMemo<AlertContextValue>(() => ({ showAlert, hideAlert }), [showAlert, hideAlert]);

  return (
    <AlertContext.Provider value={value}>
      {children}
      {isMounted &&
        createPortal(
          <div className="fixed top-6 left-0 right-0 z-[1000] flex justify-center pointer-events-none">
            <AnimatePresence mode="wait" initial={false}>
              {alert ? (
                <motion.div
                  key="global-alert"
                  initial={{ y: -24, opacity: 0, scale: 0.98 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -24, opacity: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.8 }}
                  className="pointer-events-auto w-[calc(100%-2rem)] max-w-2xl">
                  <Alert
                    variant={alert.variant ?? "error"}
                    title={alert.title}
                    description={alert.description}
                    dismissible
                    onClose={hideAlert}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>,
          document.body
        )}
    </AlertContext.Provider>
  );
}
