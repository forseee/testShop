import React, { FC, SVGProps } from "react";

import { CopyImg } from "./Icons/CopyImg";
import { FacebookImg } from "./Icons/FacebookImg";
import { InstagramImg } from "./Icons/InstagramImg";
import { MainLogo } from "./Icons/MainLogo";
import { MetamaskLogo } from "./Icons/MetamaskLogo";
import { TwitterImg } from "./Icons/TwitterImg";
import { YoutubeImg } from "./Icons/Youtube";

const iconsMap = {
  Logo: MainLogo,
  MetamaskLogo,
  CopyImg,
  FacebookImg,
  YoutubeImg,
  TwitterImg,
  InstagramImg,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof iconsMap;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = iconsMap[name];

  return <IconComponent {...props} />;
};
