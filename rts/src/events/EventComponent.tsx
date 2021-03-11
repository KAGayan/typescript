import { ChangeEvent, DragEvent, FC } from "react";

const EventComponent: FC = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    console.log("I am being dragged");
  };

  return (
    <>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </>
  );
};

export default EventComponent;
