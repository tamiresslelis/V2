import styled from 'styled-components';
import { TLTokens } from '@faraujo/loop-design-system';

export const Logo = styled.img`
    margin: 4px 0;
`;

export const Header = styled.header`
    height:${TLTokens.spacingStackXxl};
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    padding: 6px 112px;
    display: flex;
    justify-content: space-between;
    align-itens: center;

    @media(max-width:800px){
        padding: 8px ${TLTokens.spacingStackXxxs};
    }
`;

export const Contact = styled.a`
  font-family: Open Sans, sans-serif ;
  font-weight: ${TLTokens.fontWeightBold};
  font-size: ${TLTokens.fontSizeXs};
  align-self: center;
  text-decoration: none;
  color: ${TLTokens.colorNeutralDarkest};
`;

export const Section = styled.section`
    padding: ${TLTokens.spacingStackXxl} 112px;
    display: flex;
    justify-content: space-between;

    @media(max-width:800px) {
        padding: 0px ${TLTokens.spacingStackXxxs};
        flex-wrap: wrap-reverse;
    }
`;

export const H5 = styled.h5`
    font-family: ${TLTokens.fontFamily01}, sans-serif;
    font-weight: ${TLTokens.fontWeightBold};
    font-size: ${TLTokens.fontSizeMd};
    color: ${TLTokens.colorBrandPrimaryMedium};
    line-height:${TLTokens.fontLineHeightMd};
    margin: 0;
    padding-top: 88px;
    
`;

export const H3 = styled.h3`
    font-family: ${TLTokens.fontFamily01}, sans-serif;
    font-weight: ${TLTokens.fontWeightBold};
    font-size: ${TLTokens.fontSizeXl};
    color: ${TLTokens.colorNeutralDark};
    line-height:${TLTokens.fontLineHeightMd};
    vertical-align:middle;
    width: 280px;
    padding-top: ${TLTokens.spacingStackXxxs};
    margin: 0 0 24px 0;

`;

export const P = styled.p`
    font-family: Open Sans, sans-serif ;
    font-weight: ${TLTokens.fontWeightRegular};
    font-size: ${TLTokens.fontSizeXs};
    color: ${TLTokens.colorNeutralMedium};
    line-height:${TLTokens.fontLineHeightLg};
    width: 488px;
    margin:0;
    
`;

export const Img = styled.img`
    max-height: 460px;
    @media(max-width:800px) {
        width:100%;
    }
`;

export const List = styled.ul`
    display: flex;
    list-style:none;
    flex-direction: row;
    padding: 0;
    
    li { padding-right: 16px; vertical-alighn: middle;}
    
`;

export const Footer = styled.footer`
    background-color: ${TLTokens.colorBrandPrimaryDarkest};
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 112px;

    @media(max-width:800px) {
        padding:  ${TLTokens.spacingStackXxs} 16px;
        flex-direction: column;
    }
    
`;

export const SectionProblemTogether = styled.section`
    font-family: ${TLTokens.fontFamily01}, sans-serif;
    font-weight: ${TLTokens.fontWeightBold};
    font-size: ${TLTokens.fontSizeXxl};
    color: ${TLTokens.colorNeutralLightest};
    line-height:${TLTokens.fontLineHeightMd};
    width: 219px;
    padding-top: ${TLTokens.spacingStackXl};
`;

export const Data = styled.p`
    
`;

export const SkillList = styled.ul`
    font-family: Open Sans, sans-serif ;
    font-weight: ${TLTokens.fontWeightRegular};
    font-size: ${TLTokens.fontSizeXs};
    color: ${TLTokens.colorNeutralLightest};
    line-height:${TLTokens.fontLineHeightLg};
    padding-top: ${TLTokens.spacingStackXl};
    list-style:none;
    padding-left: 0;
    li { padding-bottom: 8px;}

`;

export const Button = styled.button`
    border:none;
    font-family: Open Sans, sans-serif ;
    font-weight: ${TLTokens.fontWeightBold};
    line-height:${TLTokens.fontLineHeightLg};
    font-size: ${TLTokens.fontSizeXs};
    background-color: ${TLTokens.colorNeutralLightest};
    padding: 8px 16px;
    border-radius: ${TLTokens.borderWidthHeavy};
    
`;