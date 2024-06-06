import React from "react";

export default function Headingyears({ years, yearsOf }) {
  return (
    <>
      <h2 className="text-xl tracking-tight mt-7 mb-4 font-semibold">
        {years}
        {yearsOf}
      </h2>
    </>
  );
}
