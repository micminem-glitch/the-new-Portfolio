"use client";

import { useEffect, useRef } from "react";

const sequence = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "micheal_nwgbolu — full stack developer, freelance" },
  { type: "cmd", text: "ls projects/" },
  { type: "out", text: "hexafox-united/  emmy-photography/" },
  { type: "cmd", text: "cat availability.txt" },
  { type: "out", text: "open for new projects — see contact section" },
  { type: "cmd", text: "git status" },
  { type: "out", text: "on branch: open-to-work\nnothing to commit, always building" },
];

export default function Terminal() {
  const bodyRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function renderStatic() {
      el.innerHTML = sequence
        .map((l) =>
          l.type === "cmd"
            ? `<p class="term-line"><span class="term-prompt">$</span> ${l.text}</p>`
            : `<p class="term-line term-out">${l.text.replace(/\n/g, "<br>")}</p>`
        )
        .join("");
    }

    let cancelled = false;

    async function typeSequence() {
      for (const line of sequence) {
        if (cancelled) return;
        const p = document.createElement("p");
        p.className = "term-line" + (line.type === "out" ? " term-out" : "");
        el.appendChild(p);
        const prefix =
          line.type === "cmd" ? '<span class="term-prompt">$</span> ' : "";
        let shown = "";
        p.innerHTML = prefix + '<span class="caret"></span>';
        for (const ch of line.text) {
          if (cancelled) return;
          shown += ch;
          p.innerHTML =
            prefix +
            shown.replace(/\n/g, "<br>") +
            '<span class="caret"></span>';
          await new Promise((r) =>
            setTimeout(r, line.type === "cmd" ? 28 : 6)
          );
        }
        p.innerHTML = prefix + shown.replace(/\n/g, "<br>");
        await new Promise((r) =>
          setTimeout(r, line.type === "cmd" ? 180 : 320)
        );
      }
    }

    if (reduceMotion) {
      renderStatic();
    } else {
      typeSequence();
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="terminal">
      <div className="term-bar">
        <span className="dot r"></span>
        <span className="dot y"></span>
        <span className="dot g"></span>
        <span className="term-title">micheal@dev — zsh</span>
      </div>
      <div className="term-body" ref={bodyRef}></div>
    </div>
  );
}
