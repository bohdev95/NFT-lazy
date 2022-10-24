import { useNavbar } from "@/hooks/useNavbar";
import Image from "next/image";

export default function Home() {
  const { toggleNavbar } = useNavbar();
  const onClickHandler = () => {
    toggleNavbar();
  };
  return (
    <>
      <div className="canvas">
        {/* <h1>Test</h1> */}
        {/* <button onClick={onClickHandler}>CLICK ME!</button> */}
      </div>
    </>
  );
}
