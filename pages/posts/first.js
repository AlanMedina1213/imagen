import Link from 'next/link'
import Image from 'next/image';

export default function FirstPost() {
   return (
      <>
         <h1>My First Post</h1>
         <h2>
            <Link href="/">
               Home
            </Link>
         </h2>
         <br/>
         <img src="../images/1.jpg" alt="Logo" />
      </>	  
   )
}

const YourComponent = () => (
   <Image
     src="../images/1.jpg" // Route of the image file
     height={144} // Desired size with correct aspect ratio
     width={144} // Desired size with correct aspect ratio
     alt="Your Name"
   />
 );