import React, { FC, SVGProps } from "react";

import { FacebookImg } from "./Icons/FacebookImg";
import { InstagramImg } from "./Icons/InstagramImg";
import { TwitterImg } from "./Icons/TwitterImg";
import { YoutubeImg } from "./Icons/Youtube";

const iconsMap = {
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
