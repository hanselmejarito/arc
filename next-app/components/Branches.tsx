"use client";

import { useState } from "react";
import { branches, type Province } from "@/data/branches";
import BranchCard from "./BranchCard";

type Filter = "all" | "accredited" | Province;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All (11)" },
  { value: "accredited", label: "Accredited (5)" },
  { value: "nueva-ecija", label: "Nueva Ecija (10)" },
  { value: "tarlac", label: "Tarlac (1)" },
];

export default function Branches() {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleBranches = branches.filter(
    (branch) =>
      filter === "all" ||
      branch.province === filter ||
      (filter === "accredited" && branch.accredited),
  );

  return (
    <section className="section branches-section" id="branches">
      <div className="section-inner">
        <div className="branches-header">
          <div>
            <div className="section-label">Locations</div>
            <h2 className="section-title">Our 11 Branches</h2>
            <p className="section-sub">
              ARC, LIFEMED, and VAXGUARD clinics across Nueva Ecija and Tarlac.
            </p>
          </div>
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
        <div className="branches-grid" aria-live="polite">
          {visibleBranches.map((branch) => (
            <BranchCard branch={branch} key={branch.number} />
          ))}
        </div>
      </div>
    </section>
  );
}
