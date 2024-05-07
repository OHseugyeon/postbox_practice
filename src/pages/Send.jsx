import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 390px;
  height: 98vh;
  background: #fff2c6;
`;
const BackBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const TitleWrapper = styled.div`
  width: 16rem;
  margin-top: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  color: #5f5f5f;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
const TitleInput = styled.input`
  width: 9rem;
  height: 1.5rem;
  background: none;
  border: none;
  border-bottom: 1px solid #000;
  color: #000;
  font-family: Inter;
  font-size: 1rem;
`;
const ContentBox = styled.textarea`
  margin-top: 30px;
  width: 18rem;
  height: 27rem;
  border-radius: 0px 0px 30px 0px;
  border: 1px solid #5f5f5f;
  background: #fff;
  resize: none;
  color: #5f5f5f;
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`;
const SaveBtn = styled.div`
  margin-top: 20px;
  width: 18rem;
  height: 45px;
  border-radius: 15px;
  border: 1px solid #5f5f5f;
  background: #fffef1;
  text-align: center;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.8;
`;

const Send = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/`);
  };

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const handleSaveButton = () => {
    console.log("제목: ", title);
    console.log("내용: ", content);
  };

  return (
    <Container>
      <BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="back"
          width="35px"
        />
      </BackBtn>
      <TitleWrapper>
        <Title>편지 제목:</Title>
        <TitleInput name="title" value={title} onChange={onChange} />
      </TitleWrapper>
      <ContentBox
        placeholder="내용 입력 ✏️"
        name="content"
        value={content}
        onChange={onChange}
      ></ContentBox>
      <SaveBtn onClick={handleSaveButton}>전송하기</SaveBtn>
    </Container>
  );
};

export default Send;
