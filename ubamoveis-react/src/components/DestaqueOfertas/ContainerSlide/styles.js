import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1390px;
  height: 715px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;

  @media (max-width: 320px) {
    height: 500px;
  }
  @media (min-width: 321px) and (max-width: 576px) {
    height: 560px;
  }
  @media (min-width: 577px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 650px;
  }
  @media (min-width: 1200px) {
  }
`;

export const DivDestaques = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1220px;
  justify-content: center;

  @media (max-width: 1064px) {
    width: 92%;
    height: 100%;
    overflow-x: scroll;
    justify-content: flex-start;
  }
  @media (min-width: 1065px) and (max-width: 1199px) {
    width: 90%;
    max-width: 90%;
  }
  @media (min-width: 1200px) {
  }
`;

export const DivControls = styled.div`
  height: 33px;
  width: 292px;
  display: flex;
  flex-direction: row;
  margin-bottom: 27px;
  justify-content: space-between;

  @media (max-width: 376px) {
    width: 250px;
  }
`;

export const Control = styled.h1`
  font-family: "DosisMedium";
  font-size: 18px;
  line-height: 22px;
  color: #000;
  border-bottom: ${(props) => (props.active ? "3px solid #000" : "none")};
  width: "30%";
  text-transform: uppercase;
  cursor: pointer;
`;

export const DivProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 385px;
  height: 648px;
  background-color: #f3f3f3;
  margin: 0 16px 0 16px;
  padding: 26px 32px 42px 32px;

  img {
    width: 326px;
    height: 326px;
  }

  @media (max-width: 320px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 90%;
    max-width: 225px;
    height: 440px;
    background-color: #f3f3f3;
    margin: 0 16px 0 16px;
    padding: 26px 32px 42px 32px;

    img {
      width: 165px;
      height: 165px;
    }
  }
  @media (min-width: 321px) and (max-width: 576px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 90%;
    max-width: 300px;
    height: 500px;
    background-color: #f3f3f3;
    margin: 0 16px 0 16px;
    padding: 26px 32px 42px 32px;

    img {
      width: 100%;
      height: 190px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 325px;
    height: 546px;

    img {
      width: 265px;
      height: 265px;
    }
  }
  @media (min-width: 1200px) {
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #8a8a8a;
`;

export const SeparatorLight = styled.div`
  height: 1px;
  width: 100%;
  background-color: #d9d9d9;
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0;
  height: 136px;

  @media (max-width: 320px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 24px 0;
    height: 136px;
  }
  @media (min-width: 321px) and (max-width: 576px) {
    align-items: flex-start;
    height: unset;
  }
`;

export const Title = styled.h1`
  font-family: "DosisSemiBold";
  font-size: 22px;
  line-height: 28px;
  color: #000;
  text-transform: uppercase;

  @media (max-width: 320px) {
    font-size: 16px;
    line-height: 20px;
    text-align: left;
  }
  @media (min-width: 321px) and (max-width: 576px) {
    font-size: 14px;
    line-height: 16px;
    text-align: left;
  }
`;

export const Price = styled.h1`
  font-family: "SourceSansProSemiBold";
  font-size: 20px;
  line-height: 25px;
  color: #d24242;
  text-transform: uppercase;
  text-align: left;
`;

export const Valid = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: #737373;
  text-transform: uppercase;
  margin-top: 11px;

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }
`;

export const DivBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 25px;
  height: 60px;

  @media (max-width: 320px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding-top: unset;
    height: unset;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 144px;
  height: 60px;

  @media (max-width: 320px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 144px;
    height: 60px;
  }
`;

export const Info = styled.p`
  font-family: "SourceSansProRegular";
  font-size: 16px;
  line-height: 20px;
  color: #737373;

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 20px;
    text-align: left;
  }
`;

export const DivColors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 138px;
  height: 54px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const TitleColor = styled.h1`
  font-family: "SourceSansProBold";
  font-size: 15px;
  line-height: 19px;
  color: #000;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (max-width: 320px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
  }
`;

export const Color = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 6px;
  margin-right: 6px;

  &:first-child {
    margin-left: 0;
  }
`;
