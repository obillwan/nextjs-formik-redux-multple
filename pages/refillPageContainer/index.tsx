import Link from "next/link";
import RefillContainer from "../../src/components/Form/RefillContainer";

export default function Home() {
  let scripts = [
    {
      id: 1,
      name: "John Smith",
      copay: "15",
      image: "john-smith.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      copay: "10",
      image: "jane-smith.jpg",
    },
    {
      id: 3,
      name: "Jane Smith",
      copay: "10.5",
      image: "jane-smith.jpg",
    },
    // ...
  ];

  return (
    <>
      <RefillContainer />
    </>
  );
}
