import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./stepForm/Names";
import { VehicleDetails } from "./stepForm/VehicleDetails";
import { BatteryDetails } from "./stepForm/BatteryDetails";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";
import { Upload } from "./stepForm/Upload";

const defaultData = {
  firstName: "",
  lastName: "",
  contact: "",
  bbrand: "",
  btype: "",
  claimType: "",
  srno: "",
  vbrand: "",
  vtype: "",
  vno: "",
  upload1: "",
  upload2: "",
};

const steps = [
  { id: "names" },
  { id: "battery details" },
  { id: "vehicle details" },
  { id: "upload" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "battery details":
      return <BatteryDetails {...props} />;
    case "vehicle details":
      return <VehicleDetails {...props} />;
      case "upload":
      return <Upload {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Error 404</h1>
    </div>
  );
};
