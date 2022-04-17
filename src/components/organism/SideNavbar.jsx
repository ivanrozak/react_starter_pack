import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import _ from "lodash";
import { routeList } from "../../routes/routeList";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SideNavbar() {
  const [listMenu, setListMenu] = useState([]);
  const [menuActive, setMenuActive] = useState([]);
  const [menuOpen, setMenuOpen] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const listRoute = routeList().find((o) => o.path === "/");

  useEffect(() => {
    const dataListMenu = listRoute.children;
    dataListMenu.forEach((item, index) => {
      item.index = index;
    });
    setListMenu(dataListMenu);
  }, []);

  useEffect(() => {
    const currentLocation = location.pathname;
    setMenuActive([currentLocation]);
    listMenu.forEach((item) => {
      item.children.forEach((i) => {
        if (i.key === currentLocation) {
          setMenuOpen([item.index.toString()]);
        }
      });
    });
  }, [listMenu]);

  const handleNavigate = (base, child, key) => {
    setMenuActive([key]);
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

  const handleOpenTab = (key) => {
    let menuData = [];
    menuOpen.forEach((item) => {
      menuData.push(item);
    });
    if (menuData.includes(key.toString())) {
      menuData = menuData.filter(function (item) {
        return item !== key.toString();
      });
      setMenuOpen(menuData);
    } else {
      menuData.push(key.toString());
      setMenuOpen(menuData);
    }
  };

  return (
    <>
      <Sider width={280} className="overflow-y-auto">
        <Menu
          mode="inline"
          selectedKeys={menuActive}
          openKeys={menuOpen}
          style={{ height: "100%", borderRight: 0 }}
        >
          {listMenu.map((item) => {
            return (
              <SubMenu
                onTitleClick={() => handleOpenTab(item.index)}
                key={item.index}
                icon={item.icon}
                title={item.title}
              >
                {item.children.map((child) => {
                  return (
                    <Menu.Item
                      key={child.key}
                      onClick={() =>
                        handleNavigate(item.path, child.path, child.key)
                      }
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
