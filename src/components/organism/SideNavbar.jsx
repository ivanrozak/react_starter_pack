import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { routeList } from "../../routes/routeList";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SideNavbar() {
  const [listMenu, setListMenu] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setListMenu(
      _.filter(routeList, (obj) => {
        return obj.path !== "*" && obj.path !== "/auth";
      })
    );
  }, []);

  const handleNavigate = (base, child) => {
    if (child) {
      if (base === "/") {
        navigate(`/${child}`);
      } else {
        navigate(`${base}/${child}`);
      }
    } else {
      navigate(base);
    }
  };

  return (
    <>
      <Sider width={280} className="overflow-y-auto">
        <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
          {listMenu.map((item, index) => {
            return (
              <SubMenu key={index} icon={item.icon} title={item.title}>
                {item.children.map((child) => {
                  return (
                    <Menu.Item
                      key={child.title}
                      onClick={() => handleNavigate(item.path, child.path)}
                    >
                      {child.title}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sider>
    </>
  );
}
