const pixelToRem = (size: number) => `${size / 16}rem`;

// fontSize
const fontSizes = {
  small: pixelToRem(14), // 0.8rem
  base: pixelToRem(16), // 1rem
  lg: pixelToRem(18),
  xl: pixelToRem(20),
  xxl: pixelToRem(22),
  xxxl: pixelToRem(24),
  titleSize: pixelToRem(50), //3.1rem
};

//디바이스 사이즈
const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '700px',
  tablet: '900px',
  tabletL: '1024px',
};

// 디바이스별 미디어쿼리
const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

// 자주 사용하는 색
const colors = {
  black: '#000000',
  grey: '#999999',
  green: '#3cb46e',
  blue: '#8c80ff',
};

// element의 base 디자인
const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
	`,
  defaultButton: `
		background:#6f6eff;
		font-size:1rem;
		color:white;
		padding: 5px 20px 5px 20px;
    border: none;
		border-radius: 20px;
		outline:0px;
		cursor:pointer;

	`,
  unclickedButtonStyle: `
	background:#d8d8d8;
		color:white;
		padding: 5px 20px 5px 20px;
    border: none;
		border-radius: 20px;
		outline:0px;
		cursor:pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #6f6eff;
		color: #fff;
		
  }
	`,
  albumCardDiv: `
	width:150px;
	height:150px;
	border-radius: 15px 15px 15px 15px;
	box-shadow: 0px 0px 5px;
	`,
  ContentCardDiv: `
	width:100%;
	height:92%;
	border-radius: 15px 15px 15px 15px;
 box-shadow: 0px 0px 5px #c8c8c8;	`,

  defaultInput: `
	border: none;
	border-bottom: 1px solid black;
	outline: none;
	
	&:focus{
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #6f6eff;
  }
    border-bottom: 2px solid #6f6eff;
    color: #6f6eff;;
	}
	`,
  AvatarImageDiv: `
	 width: 100%;
	 height:100%;
	 border-radius: 0px 0px 60px;
	`,
  StateDiv: `
	background:#6f6eff;
		font-size:1rem;
		color:white;
    border: none;
		border-radius: 5px;
		padding: 3px 10px 3px 10px;
	`,
  NoticeCardDiv: `
	width:96%;
	height:60px;
	
	margin:0 auto;
	border-radius: 8px 8px 8px 8px;
	margin-top: 1%;
	margin-bottom: 2%;
	box-shadow: 0px 0px 5px #c8c8c8;
	`,
};

const theme = {
  fontSizes,
  colors,
  common,
  device,
  deviceSizes,
};

export default theme;
