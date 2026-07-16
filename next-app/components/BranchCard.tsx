import Image from "next/image";
import type { CSSProperties } from "react";
import type { Branch } from "@/data/branches";
import { brandLogos } from "@/data/brands";

const shapePaths: Record<Branch["mapShape"], React.ReactNode> = {
  cross: (
    <>
      <line x1="0" y1="70" x2="300" y2="70" />
      <line x1="150" y1="0" x2="150" y2="140" />
    </>
  ),
  roads: (
    <>
      <line x1="0" y1="35" x2="300" y2="35" />
      <line x1="0" y1="105" x2="300" y2="105" />
    </>
  ),
  circle: <circle cx="150" cy="70" r="50" fill="none" />,
  triangle: <polygon points="150,10 290,130 10,130" fill="none" />,
  waves: <path d="M0 100 Q75 20 150 70 Q225 120 300 40" fill="none" />,
  box: <rect x="50" y="20" width="200" height="100" fill="none" />,
};

export default function BranchCard({
  branch,
  style,
}: {
  branch: Branch;
  style?: CSSProperties;
}) {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`;
  const brand = brandLogos[branch.brand];

  return (
    <article
      id={`branch-${branch.number}`}
      className="branch-card branch-card-enter"
      style={style}
    >
      <div
        className={`branch-map${branch.mapEmbedUrl ? " has-embed" : ""}`}
        style={branch.mapEmbedUrl ? undefined : { background: branch.mapStyle }}
      >
        {branch.mapEmbedUrl ? (
          <iframe
            className="branch-map-embed"
            src={branch.mapEmbedUrl}
            title={`${branch.name} map`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <>
            <svg
              className="branch-map-lines"
              viewBox="0 0 300 140"
              aria-hidden="true"
            >
              {shapePaths[branch.mapShape]}
            </svg>
            <div className="branch-pin" aria-hidden="true">
              📍
            </div>
          </>
        )}
        <div className="branch-num-badge">
          Branch {branch.number} · {branch.brand}
          {branch.main ? " · Main" : ""}
        </div>
        <div
          className={`branch-status ${branch.accredited ? "accredited" : "walkins"}`}
        >
          {branch.accredited ? "Accredited" : "Open daily"}
        </div>
      </div>
      <div className="branch-info">
        <div className="branch-name-row">
          <div className="branch-brand-mark">
            <Image
              src={brand.src}
              alt={brand.alt}
              width={40}
              height={40}
              className="branch-brand-logo"
            />
          </div>
          <h3 className="branch-name">{branch.name}</h3>
        </div>
        <div className="branch-address">
          <span aria-hidden="true">📍</span>
          <span>{branch.address}</span>
        </div>
        <div className="branch-meta">
          <div className="branch-meta-item">🕐 {branch.hours}</div>
          <div className="branch-meta-item">
            {branch.accredited
              ? "✓ PhilHealth · DOH Accredited"
              : "💊 PEP · PrEP · RIG"}
          </div>
        </div>
        <a href={`tel:${branch.phoneHref}`} className="branch-tel">
          📞 {branch.phone}
        </a>
        <div className="branch-actions">
          <a
            className="branch-btn"
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Directions
          </a>
          <a
            className="branch-btn branch-btn-call"
            href={`tel:${branch.phoneHref}`}
          >
            📞 Call
          </a>
        </div>
      </div>
    </article>
  );
}
