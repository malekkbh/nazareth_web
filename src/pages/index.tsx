import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();

  const navigateTo = () => {

    console.log("hello");
    
    router.push("/page1");
  };

  return (
    <div className="container">
      <Link href={"/cars"}>
        <text id={"btata"} className="title">
          cars{" "}
        </text>
      </Link>
      <text onClick={navigateTo}>Code Zone </text>
    </div>
  );
};

export default Index;
