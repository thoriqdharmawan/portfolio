import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import "./bubble.css";

const Child = ({ name, id }) => {
  return (
    <div
      style={{
        backgroundColor: id % 2 === 1 ? "#996515" : "#848482",
        borderRadius: "50%",
        width: "100%",
        height: "100%",
      }}
      className="bubbleUI-childComponent"
    >
      {/* {name} */}
    </div>
  );
};

const options = {
  size: 152,
  minSize: 14,
  gutter: 7,
  provideProps: true,
  numCols: 3,
  fringeWidth: 120,
  yRadius: 103,
  xRadius: 149,
  cornerRadius: 44,
  showGuides: false,
  compact: true,
  gravitation: 0,
};

const data = [
  { name: "ok" },
  { name: "1 ok 1" },
  { name: "1 ok 2" },
  { name: "1 ok 3" },
  { name: "1 2 ok" },
  { name: "1 2 ok 1" },
  { name: "1 2 ok 2" },
  { name: "1 2 ok 3" },
  { name: "1 2 3 ok" },
  { name: "1 2 3 ok 1" },
  { name: "1 2 3 ok 2" },
  { name: "1 2 3 ok 3" },
  { name: "1 2 3 4 ok" },
  { name: "1 2 3 4 ok 1" },
  { name: "1 2 3 4 ok 2" },
  { name: "1 2 3 4 ok 3" },
  { name: "1 2 3 4 5 ok" },
  { name: "1 2 3 4 5 ok 1" },
  { name: "1 2 3 4 5 ok 2" },
  { name: "1 2 3 4 5 ok 3" },
];

const BubbleSkills = () => {
  const children = data?.map((data, idx) => (
    <Child key={idx} name={data?.name} id={idx} />
  ));

  return (
    <div style={{ height: "400px" }}>
      <BubbleUI options={options} className="bubbleUI-root">
        {children}
      </BubbleUI>
    </div>
  );
};

export default BubbleSkills;
