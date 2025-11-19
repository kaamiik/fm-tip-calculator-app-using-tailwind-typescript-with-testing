import RadioTip from "../RadioTip";
import CustomTip from "../CustomTip";

function TipGroup() {
  const tipAmounts = ["5%", "10%", "15%", "25%", "50%"];
  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {tipAmounts.map((tipAmount, index) => (
        <RadioTip
          key={index}
          label={tipAmount}
          value={tipAmount.replace("%", "")}
        />
      ))}
      <CustomTip key="custom" />
    </div>
  );
}

export default TipGroup;
