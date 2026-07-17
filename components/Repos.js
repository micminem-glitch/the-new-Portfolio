"use client";

import { useEffect, useState } from "react";

const GH_USER = "micminem-glitch";

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mo ago`;
  return `${Math.floor(months / 12)} yr ago`;
}

export default function Repos() {
  const [repos, setRepos] = useState(null);
  const [status, setStatus] = useState(
    `fetching from github.com/${GH_USER} …`
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GH_USER}/repos?sort=updated&per_page=6`,
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (res.status === 403) {
          throw new Error("rate limited by GitHub — refresh in a bit");
        }
        if (!res.ok) throw new Error("GitHub API error: " + res.status);
        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error(data.message || "unexpected response");
        }
        const visible = data.filter((r) => !r.fork).slice(0, 6);
        if (cancelled) return;
        setRepos(visible);
        setStatus(
          visible.length
            ? `${visible.length} repos · live from GitHub`
            : "0 repos found"
        );
      } catch (err) {
        if (cancelled) return;
        setError(err.message);
        setStatus("load failed");
      }
    }

    loadRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="repos">
      <div className="wrap">
        <div className="repo-toolbar">
          <div>
            <p className="kicker">More code</p>
            <h2>Recent GitHub activity</h2>
          </div>
          <span className="status">{status}</span>
        </div>

        <div className="repo-grid">
          {!repos && !error && (
            <>
              <div className="skeleton"></div>
              <div className="skeleton"></div>
              <div className="skeleton"></div>
              <div className="skeleton"></div>
            </>
          )}

          {error && (
            <div className="repo-error">
              Couldn&apos;t load repositories right now ({error}). View the
              profile directly at{" "}
              <a
                href={`https://github.com/${GH_USER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/{GH_USER}
              </a>
              .
            </div>
          )}

          {repos && repos.length === 0 && (
            <div className="repo-empty">
              No public, non-forked repositories found yet. Browse the full
              profile on GitHub:{" "}
              <a
                href={`https://github.com/${GH_USER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/{GH_USER}
              </a>
            </div>
          )}

          {repos &&
            repos.map((r) => (
              <a
                className="repo-card"
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={r.id}
              >
                <div className="repo-card-top">
                  <span className="repo-name">{r.name}</span>
                </div>
                <p className="repo-desc">
                  {r.description || "No description provided."}
                </p>
                <div className="repo-meta">
                  {r.language && (
                    <span>
                      <span className="lang-dot"></span>
                      {r.language}
                    </span>
                  )}
                  <span>★ {r.stargazers_count}</span>
                  <span>updated {timeAgo(r.updated_at)}</span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
