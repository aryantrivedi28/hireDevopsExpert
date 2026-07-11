import fs from "node:fs";
import path from "node:path";

const LOGO_CANDIDATES = ["logo.svg", "logo.png"];

function findLogoFile() {
  for (const filename of LOGO_CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), "public", filename))) {
      return `/${filename}`;
    }
  }
  return null;
}

export default function Logo() {
  const src = findLogoFile();

  return (
    <div className="px-4 py-4 md:px-6">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- intrinsic size unknown until a real asset is dropped in
        <img src={src} alt="Hire DevOps Expert" className="h-10 w-auto" />
      ) : (
        <>
          {/* PLACEHOLDER: drop logo SVG/PNG into /public as logo.svg or logo.png */}
          <span className="font-mono text-mono-label tracking-[0.12em] text-slate uppercase">
            Logo placeholder
          </span>
        </>
      )}
    </div>
  );
}
