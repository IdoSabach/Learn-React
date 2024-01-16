export default function Tabs( {children , btn , BtnBox = "menu"} ){
  // const BtnBox = btnBox;
  return (
    <>
      <BtnBox>
        {btn}
      </BtnBox>
      {children}
    </>
  )
}