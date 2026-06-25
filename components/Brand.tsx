import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Go to homepage">
      <Image src="/mark.svg" alt="" width={38} height={38} priority />
      <span>
        <strong>Prompt Refinement</strong>
        <small>AI Video Quality Lab</small>
      </span>
    </Link>
  );
}
