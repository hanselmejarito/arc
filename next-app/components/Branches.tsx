"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { brandLogos, brandOrder } from "@/data/brands";
import { branches, type Branch, type Province } from "@/data/branches";
import BranchCard from "./BranchCard";

type Filter = "all" | "accredited" | Province;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All (11)" },
  { value: "accredited", label: "Accredited (5)" },
  { value: "nueva-ecija", label: "Nueva Ecija (10)" },
  { value: "tarlac", label: "Tarlac (1)" },
];

function branchMatchesSearch(branch: Branch, query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;

  const searchable = [
    branch.name,
    branch.shortName,
    branch.address,
    branch.brand,
    branch.phone,
    branch.phoneHref,
    branch.mapQuery,
    branch.province === "nueva-ecija" ? "nueva ecija" : "tarlac",
    branch.accredited ? "accredited philhealth doh" : "open daily walk-in",
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(normalized);
}

function branchMatchesFilter(branch: Branch, filter: Filter) {
  if (filter === "all") return true;
  if (filter === "accredited") return branch.accredited;
  return branch.province === filter;
}

export default function Branches() {
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const visibleBranches = useMemo(
    () =>
      branches.filter(
        (branch) =>
          branchMatchesFilter(branch, filter) &&
          branchMatchesSearch(branch, search),
      ),
    [filter, search],
  );

  return (
    <section className="section branches-section" id="branches">
      <div className="section-inner">
        <div className="branches-header">
          <div className="branches-intro">
            <div className="section-label">Locations</div>
            <h2 className="section-title">Our 11 Branches</h2>
            <p className="section-sub">
              ARC, LIFEMED, and VAXGUARD clinics across Nueva Ecija and Tarlac.
            </p>
            <div className="brand-strip" aria-label="Clinic brands">
              {brandOrder.map((id) => {
                const brand = brandLogos[id];
                return (
                  <div className="brand-strip-item" key={id}>
                    <span className="brand-strip-mark">
                      <Image
                        src={brand.src}
                        alt=""
                        width={44}
                        height={44}
                        className="brand-strip-logo"
                      />
                    </span>
                    <span className="brand-strip-label">{brand.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="branches-toolbar">
            <label className="branch-search">
              <span className="sr-only">Search branches</span>
              <svg
                className="branch-search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="text"
                role="searchbox"
                inputMode="search"
                enterKeyHint="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by city, branch, or address..."
                aria-controls="branches-results"
                autoComplete="off"
              />
              {search ? (
                <button
                  type="button"
                  className="branch-search-clear"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              ) : null}
            </label>
            <div className="branch-filter" aria-label="Filter branches">
              {filters.map((item) => (
                <button
                  className={`filter-btn${filter === item.value ? " active" : ""}`}
                  type="button"
                  aria-pressed={filter === item.value}
                  onClick={() => setFilter(item.value)}
                  key={item.value}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="branches-result-count" aria-live="polite">
          {search || filter !== "all"
            ? `Showing ${visibleBranches.length} of ${branches.length} branches`
            : null}
        </p>
        <div className="branches-grid" id="branches-results" aria-live="polite">
          {visibleBranches.length > 0 ? (
            visibleBranches.map((branch, index) => (
              <BranchCard
                branch={branch}
                key={branch.number}
                style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
              />
            ))
          ) : (
            <div className="branches-empty">
              <p>No branches match your search.</p>
              <button
                type="button"
                className="filter-btn"
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                }}
              >
                Clear search &amp; filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
