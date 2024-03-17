import Image from "next/image";
import Header from "./preview-components/Header/Header";
import Container from "./preview-components/Container/Container";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <Container />
    </div>
  );
}
