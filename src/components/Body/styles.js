import styled from 'styled-components';
import { TLTokens } from '@faraujo/loop-design-system';


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
@media(max-width:800px) {
    padding-right: 16px;
}

`;

export const Img = styled.img`
max-height: 460px;
@media(max-width:800px) {
    padding-top:${TLTokens.spacingStackSm};
    max-width:250px;
    max-height:250px;
    display:flex;
    align-content: center;
}
`;

export const List = styled.ul`
display: flex;
list-style:none;
flex-direction: row;
padding: 0;

li { padding-right: 16px; vertical-alighn: middle;}

`;