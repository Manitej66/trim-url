import Text from "@geist-ui/react/esm/text";
import Toggle from "@geist-ui/react/esm/toggle";
import { useLocation } from "react-router-dom";

const Nav = ({ setThemeType }) => {
  const location = useLocation();

  const handler = (event) => {
    if (event.target.checked) setThemeType("dark");
    else setThemeType("light");
  };

  if (location.pathname == "/") {
    return (
      <div className="nav">
        <Text h1 size={24} style={{ padding: 0, margin: 0 }}>
          trim
        </Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text p style={{ paddingRight: 10 }}>
            Dark mode
          </Text>
          <Toggle size="large" onChange={handler} />
        </div>
      </div>
    );
  } else return null;
};

export default Nav;
