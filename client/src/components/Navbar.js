import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item name="Home">Home</Menu.Item>
      </Link>
      <Link to="/productAPI">
        <Menu.Item name="productAPI">productAPI</Menu.Item>
      </Link>
      <Link to="/reviewAPI">
        <Menu.Item name="reviewAPI">reviewAPI</Menu.Item>
      </Link>
    </Menu>
  );
};
