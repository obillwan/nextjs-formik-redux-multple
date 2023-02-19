import Link from "next/link";
import FormikContainer2 from "../../src/components/Form/FormikContainer2";
import FormikContainer3 from "../../src/components/Form/FormikContainer3";

export default function Home() {
  return (
    <>
      <h4>
        1. Chose options and click submit
        <FormikContainer3 />
        <br />
        {/* 2. Chose options and click submit
        <FormikContainer2 />
        <br />
        3.
        <Link href="../navSelectBirdAndSize">
          <a>Click here to go to other page</a>
        </Link>
        <br />
        <br />
        4.
        <Link href="/">
          <a>Click here to go back home</a>
        </Link> */}
      </h4>
    </>
  );
}
