import Link from 'next/link'
import FormikContainer2 from '../../src/components/Form/FormikContainer2'

export default function Home() {
  return (
    <>
      <h4>
        1. Chose options and click submit 
        <FormikContainer2/>
        <br/>
        2. 
        <Link href="../navSelectBirdAndSize">
          <a>Click here to go to other page</a>
        </Link>
        <br/><br/>
        3. 
        <Link href="/">
          <a>Click here to go back home</a>
        </Link>
      </h4>
      </>
  )
}
