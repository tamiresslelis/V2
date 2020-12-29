import styled from 'styled-components';
import { TLTokens } from '@faraujo/loop-design-system';

export const Container = styled.footer`
    background-color: ${TLTokens.colorBrandPrimaryDarkest};
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 112px;
    flex-wrap: wrap;

    @media(max-width:800px) {
        padding:  ${TLTokens.spacingStackXxs} 16px;
        flex-direction: column;
    }
    
`;

export const SectionProblemTogether = styled.section`
    font-family: ${TLTokens.fontFamily01};
    font-weight: ${TLTokens.fontWeightBold};
    font-size: ${TLTokens.fontSizeXxl};
    color: ${TLTokens.colorNeutralLightest};
    line-height:${TLTokens.lineHeightMedium};
    width: 219px;
    padding-top: ${TLTokens.spacingStackXl};
    @media(max-width:800px) {
        padding-top: ${TLTokens.spacingStackXs}
    }
`;

export const Data = styled.p`
    flex-basis: 100%;
    text-align:center;
    font-family: Open Sans, sans-serif ;
    font-weight: ${TLTokens.fontWeightBold};
    font-size: ${TLTokens.fontSizeXxxs};
    color: ${TLTokens.colorNeutralLightest};
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
    @media(max-width:800px) {
        padding:0;  
    }

`;

export const Button = styled.button`
    border:none;
    font-family: Open Sans, sans-serif ;
    font-weight: ${TLTokens.fontWeightBold};
    line-height:${TLTokens.fontLineHeightLg};
    font-size: ${TLTokens.fontSizeXs};
    background-color: ${TLTokens.colorNeutralLightest};
    padding: 12px 16px;
    border-radius: ${TLTokens.borderWidthHeavy};
    
`;