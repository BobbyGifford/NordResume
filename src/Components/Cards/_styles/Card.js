import styled from 'styled-components';
import { Colors } from '../../../global';

export const CSSContainer = styled.div`
    max-width: 90vw
    margin: 0 auto
    .btn-flat {
        margin-top: 1vh
        background-color: ${Colors.nord10};
        color: ${Colors.nord6};
      }
      .btn-secondary {
        margin-top: 1vh
      }
`;

export const CSSCardBody = styled.div`
  color: ${Colors.nord6};
  background-color: ${Colors.nord1};
  min-height: 30em;
`;

export const CSSBuiltUsing = styled.div`
    color: ${Colors.nord8}
    margin-top: 1.25vh
    margin-bottom: .5vh
`;

export const CSSCardTech = styled.span`
  color: ${Colors.nord8};
`;
