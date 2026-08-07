import Image from "next/image";

type LogoMarkProps = {
  compact?: boolean;
  eager?: boolean;
  inverse?: boolean;
};

export function LogoMark({ compact = false, eager = false, inverse = false }: LogoMarkProps) {
  return (
    <span className={`brand${compact ? " brand--compact" : ""}${inverse ? " brand--inverse" : ""}`} aria-label="BBM Safaris">
      <Image
        src="/assets/figma/reference/logo.png"
        alt="BBM — Bush, Beach, Mountain"
        width={513}
        height={465}
        sizes={compact ? "5.75rem" : "11.25rem"}
        loading={compact || eager ? "eager" : "lazy"}
      />
    </span>
  );
}
