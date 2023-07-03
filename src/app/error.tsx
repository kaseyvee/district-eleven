// "use client";

// import { motion } from "framer-motion";

// import HeroButton from "@/components/HeroButton";

// export const dynamic = 'error';

// export default function Error() {
//   return (
//     <main className="error-page">
//       <div className="wrapper">
//         <motion.div
//           className="homepage-hero_content"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="homepage-hero_content_words">
//             <span className="homepage-hero_content_words_header">Giời ơi!</span>
//             <span className="homepage-hero_content_words_header">
//               We couldn't find that. :(
//             </span>

//             <span className="homepage-hero_content_words_greeting">
//               Maybe you meant...
//             </span>
//           </h1>

//           <div className="homepage-hero_content_buttons">
//             <HeroButton to="/" color="white" children="HOME" />
//             <HeroButton to="/menu" color="white" children="MENU" />
//           </div>
//         </motion.div>
//       </div>
//     </main>
//   );
// }

'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}