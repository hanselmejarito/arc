import { readFileSync } from "node:fs";
import { join } from "node:path";
import LegacyClient from "./legacy-client";

export default function Home() {
  const source = readFileSync(
    join(process.cwd(), "..", "arc-anti-rabies-clinic.html"),
    "utf8",
  );

  const styles = Array.from(
    source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi),
    (match) => match[1],
  ).join("\n");

  const bodyMatch = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = (bodyMatch?.[1] ?? "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replaceAll('src="arc_logo.jpg"', 'src="/arc_logo.jpg"')
    .replaceAll('href="arc_logo.jpg"', 'href="/arc_logo.jpg"');

  const scripts = Array.from(
    source.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi),
    (match) => match[1].trim(),
  ).filter(Boolean);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <LegacyClient scripts={scripts} />
    </>
  );
}
