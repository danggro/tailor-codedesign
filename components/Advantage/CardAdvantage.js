import Image from "next/image";

export default function CardAdvantage(props) {
  return (
    <div className="text-center max-w-[238px]">
      <Image width="238" height="294" alt="" src={props.img} />
      <h4 className="px-12 mt-3 mb-2 text-xl font-semibold">{props.title}</h4>
      <p className="text-sm px-7 text-pink">{props.desc}</p>
    </div>
  );
}
