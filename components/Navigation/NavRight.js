import Link from "next/link";

export default function NavRight() {
  return (
    <div className="flex gap-[108px] items-center">
      <div className="flex gap-10">
        <Link href="/" className="hover:underline text-[15px] font-medium">
          About Us
        </Link>
        <Link href="/" className="hover:underline text-[15px] font-medium">
          How It Works
        </Link>
      </div>
      <button className="text-[15px] border transition-all border-[#F7C8E0] hover:bg-transparent bg-[#F7C8E0] font-medium px-5 py-3 rounded-[10px]">
        Lets Contact
      </button>
    </div>
  );
}
