"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom Cursor — Refined Brand Blue & Glass Style
 *
 * - Perfectly matches the portfolio's clean white + blue palette.
 * - Light, semi-transparent ring that never covers or darkens text.
 * - Tiny 4px precision center dot.
 * - Expands smoothly over interactive links and buttons.
 * - Shows a branded blue bubble over project cards with `data-cursor="view"`.
 * - Steps aside for input text fields to show the native I-beam cursor.
 * - Disabled on touch/mobile devices and respects `prefers-reduced-motion`.
 */

type Mode = "default" | "link" | "view" | "text";

const TEXT_FIELDS =
  "input:not([type='button']):not([type='submit']):not([type='checkbox']):not([type='radio']), textarea, select, [contenteditable='true']";

const INTERACTIVE =
  "[data-cursor], a[href], button:not(:disabled), [role='button'], summary, label[for]";

const SIZE: Record<Mode, number> = {
  default: 26,
  link: 46,
  view: 76,
  text: 0,
};

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [label, setLabel] = useState("");
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const seen = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 26, mass: 0.5 });

  // Only on devices with a real hover pointer, and not for reduced motion
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);

    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;

      x.set(e.clientX);
      y.set(e.clientY);

      // first move: snap the ring to the pointer instead of flying in
      if (!seen.current) {
        seen.current = true;
        ringX.jump(e.clientX);
        ringY.jump(e.clientY);
      }
      setVisible(true);

      const target = e.target as Element | null;

      if (target?.closest(TEXT_FIELDS)) {
        setMode("text");
        setLabel("");
        return;
      }

      const el = target?.closest<HTMLElement>(INTERACTIVE);

      if (!el) {
        setMode("default");
        setLabel("");
      } else if (el.dataset.cursor === "view") {
        setMode("view");
        setLabel(el.dataset.cursorLabel ?? "View");
      } else {
        setMode("link");
        setLabel("");
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("mouseenter", onEnter);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, x, y, ringX, ringY]);

  if (!enabled) return null;

  const hidden = !visible || mode === "text";

  return (
    <>
      {/* Hide native cursor everywhere except input fields */}
      <style>{`html.has-custom-cursor, html.has-custom-cursor *:not(input):not(textarea):not(select):not([contenteditable="true"]) { cursor: none !important; }`}</style>

      {/* Trailing Ring — Light Brand Blue & Glass Border */}
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[99999]"
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              width: SIZE[mode],
              height: SIZE[mode],
              opacity: hidden ? 0 : 1,
              scale: pressed ? 0.88 : 1,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className={`flex items-center justify-center rounded-full transition-colors duration-200 ${
              mode === "view"
                ? "bg-blue-600 border border-blue-500 shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
                : mode === "link"
                ? "border-[1.5px] border-blue-500/75 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                : "border-[1.5px] border-blue-500/35 bg-blue-500/[0.03]"
            }`}
          >
            {mode === "view" && (
              <span className="text-[11px] font-semibold text-white tracking-wider select-none px-2">
                {label}
              </span>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Precise Center Dot */}
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[99999]"
      >
        <motion.div
          animate={{
            scale: mode === "view" ? 0 : mode === "link" ? 0.5 : 1,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="-ml-[2.5px] -mt-[2.5px] h-[5px] w-[5px] rounded-full bg-blue-600 shadow-xs"
        />
      </motion.div>
    </>
  );
}
