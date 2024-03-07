
interface ButtonProps{
    children: string
    color?: string
    //onClick:()=>void
}
export default function Button({
  children,
  color,
  //onClick,
}: ButtonProps) {
  return (
    <>
      <div>
        <button className={color}>
          {children}
        </button>
      </div>
    </>
  );
}
