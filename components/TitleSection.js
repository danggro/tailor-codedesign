export default function TitleSection(props) {
  return (
    <div>
      <h2 className="text-[40px] leading-[47px] mb-2 font-semibold">
        {props.title}
      </h2>
      <p className="text-lg text-white/60">{props.desc}</p>
    </div>
  );
}
