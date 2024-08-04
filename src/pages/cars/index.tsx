import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div>
      <Link href={"/cars/sport_cars"}>Sport</Link>
      <br />
      <Link href={"/cars/salon_cars"}>Salon</Link>
    </div>
  );
};

export default Index;
