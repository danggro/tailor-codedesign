export default function ItemFooter(props) {
  return (
    <div>
      <h5 className="font-semibold mb-[6px] text-lg tracking-[0.065em]">
        {props.title}
      </h5>
      <ul>{props.children}</ul>
    </div>
  );
}
