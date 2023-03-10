const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-workSans font-light xs:text-[20px] text-[24px] text-white w-full",
    paragraph: "font-karla font-normal text-offWhite text-[14px] leading-[25px] text-justify",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    button: "mt-10 py-2 px-6 bg-transparent hover:bg-offWhite border-dotted border-2 border-offWhite font-karla text-xl text-offWhite hover:text-primary cursor-pointer outline-white z-20",
    buttonFilled: "mt-10 py-2 px-6 bg-dark hover:bg-offWhite border-dotted border-2 border-offWhite font-karla text-xl text-offWhite hover:text-primary cursor-pointer outline-white z-20",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;