import Link from "next/link";

export default function LinkFooter(props) {
  return (
    <li className="mt-[13px] w-[133px]">
      <Link href={"#"} className="text-lg tracking-[0.065em] hover:underline">
        {props.children}
      </Link>
    </li>
  );
}
