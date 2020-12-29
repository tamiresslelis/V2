import styled from 'styled-components';
import { TLTokens } from '@faraujo/loop-design-system';

export const Logo = styled.img`
    margin: 4px 0;
`;

export const Head = styled.header`
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
  font-family: ${TLTokens.fontFamily02};
  font-weight: ${TLTokens.fontWeightBold};
  font-size: ${TLTokens.fontSizeXs};
  align-self: center;
  text-decoration: none;
  color: ${TLTokens.colorNeutralDarkest};
`;