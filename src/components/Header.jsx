const Header = ({ label, image }) => {
  return (
    <>
      <div id="header">
        <img src={image} alt="Investments" />
      </div>
      <h1 id="header">{label}</h1>
    </>
  );
};

export default Header;
