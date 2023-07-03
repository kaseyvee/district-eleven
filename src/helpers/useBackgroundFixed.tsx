import { useEffect, useState } from "react";

export default function useBackgroundFixed() {
  const [bgAttachFixedSupport, setBgAttachFixedSupport] = useState(false);

  useEffect(() => {
    if (CSS.supports("background-attachment:fixed")) {
      setBgAttachFixedSupport(true);
    }

  }, [])

  return bgAttachFixedSupport;
}