import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => {
        console.log("clicked");
      }}
    >
      Test Children
    </ChildAsFC>
  );
};

export default Parent;
