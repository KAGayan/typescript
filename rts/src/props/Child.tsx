interface ChildProps {
  color: string;
  onClick: () => void;
}
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
      {children}
    </div>
  );
};
