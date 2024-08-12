import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useBulmaLayout = () => {
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [widescreen, setWidescreen] = useState(false);
  const [fullHd, setFullHd] = useState(false);

  const Width = useSelector((s) => s.ui.Width);

  useEffect(() => {
    if (Width < 768) {
      setMobile(true);
      setTablet(false);
      setDesktop(false);
      setWidescreen(false);
      setFullHd(false);
    } else if (Width < 1024) {
      setMobile(false);
      setTablet(true);
      setDesktop(false);
      setWidescreen(false);
      setFullHd(false);
    } else if (Width < 1216) {
      setMobile(false);
      setTablet(false);
      setDesktop(true);
      setWidescreen(false);
      setFullHd(false);
    } else if (Width < 1408) {
      setMobile(false);
      setTablet(false);
      setDesktop(false);
      setWidescreen(true);
      setFullHd(false);
    } else {
      setMobile(false);
      setTablet(false);
      setDesktop(false);
      setWidescreen(false);
      setFullHd(true);
    }
  }, [Width]);

  return {
    mobile,
    tablet,
    desktop,
    widescreen,
    fullHd,
    touch: mobile || tablet,
  };
};
