import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeSliderProps {
  value: number[];
  onChange: (value: number | number[]) => void;
}

const RangeSlider = ({ value, onChange }: RangeSliderProps) => (
  <Slider
    range
    value={value}
    onChange={onChange}
    min={0}
    max={500}
    step={5}
    trackStyle={[{ backgroundColor: "#777" }]}
    handleStyle={[
      { backgroundColor: "#000", borderColor: "#000" },
      { backgroundColor: "#000", borderColor: "#000" },
    ]}
    railStyle={{ backgroundColor: "#ddd" }}
    activeDotStyle={{ backgroundColor: "#1890ff" }} // Blue color for the range
    className="mt-2"
    pushable
  />
);

export default RangeSlider;
