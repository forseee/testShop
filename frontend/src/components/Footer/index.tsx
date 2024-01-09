import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Conteiner } from "src/assets/styles/globals";
import { Icon } from "src/components/Icon/Icon";

const links = [
  {
    name: "Privat Policy",
    link: "/",
  },
  {
    name: "Terms & Conditions",
    link: "/",
  },
  {
    name: "Cookie Policy",
    link: "/",
  },
];

type socialNetworksT = {
  link: string;
  name: string;
  imgName: "FacebookImg" | "TwitterImg" | "InstagramImg" | "YoutubeImg";
}[];

const socialNetworks: socialNetworksT = [
  { link: "https://facebook.com", name: "Facebook", imgName: "FacebookImg" },
  { link: "https://twitter.com", name: "Twitter", imgName: "TwitterImg" },
  { link: "https://youtube.com", name: "Youtube", imgName: "YoutubeImg" },
  { link: "https://instagram.com", name: "Instgram", imgName: "InstagramImg" },
];

const Footer = () => {
  return (
    <FotterStyled>
      <Conteiner>
        <WrapperStyled>
          <LinksWrapperStyled>
            {links.map((link, index) => (
              <li key={index}>
                <Link target="_blank" to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </LinksWrapperStyled>
          <LogoStyled to="./">Auto Spares Hub</LogoStyled>
          <ImgWrapperStyled>
            {socialNetworks.map((network, index) => (
              <li key={index}>
                <a target="_blank" href={network.link}>
                  <Icon name={network.imgName} width={24} height={24} />
                </a>
              </li>
            ))}
          </ImgWrapperStyled>
        </WrapperStyled>
        <TextStyled>©2024 All rights reserved.</TextStyled>
      </Conteiner>
    </FotterStyled>
  );
};

const FotterStyled = styled.div`
  flex: 0 0 auto;
  background: ${({ theme }) => theme.colors.background.main};
  border-top: 1px solid #cdd2dd;
  z-index: ${({ theme }) => theme.order.footer};
  padding-top: 50px;
  padding-bottom: 40px;
  @media ${({ theme }) => theme.media.tablet} {
    border-top: none;
  }
`;

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const LogoStyled = styled(Link)`
  text-align: center;
  font-weight: 500;
  font-size: x-large;
`;

const IconStyle = styled(Icon)`
  margin-left: 45px;
  @media ${({ theme }) => theme.media.tablet} {
    width: 120px;
    height: 20px;
    order: -1;
    margin: 0 0 60px 0;
  }
`;

const TextStyled = styled.div`
  text-align: center;
`;

const LinksWrapperStyled = styled.ul`
  li {
    margin-bottom: 10px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const ImgWrapperStyled = styled.ul`
  display: flex;
  gap: 24px;
`;

export default Footer;
