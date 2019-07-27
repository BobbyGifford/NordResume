import styled from 'styled-components'
import { Colors } from '../../../global'

export const CSSFeature = styled.div`
    background-color: ${Colors.nord1}
    text-align: center;
    color: ${Colors.nord6};
    img {
        max-width: 15vw;
        margin-bottom: .2vh;
    }
    .jumbotron {
        background-color: ${Colors.nord1}
    }
    .btn-flat { 
        background-color: ${Colors.nord10};
        color: ${Colors.nord6};
        margin-right: .2vw;
    }
    .btn-alt {
        background-color: ${Colors.nord15};
        color: ${Colors.nord6};
    }
`;