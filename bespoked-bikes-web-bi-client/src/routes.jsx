import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    BellIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
  } from "@heroicons/react/24/solid";
  import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
  import { SignIn, SignUp } from "@/pages/auth";
  import Products from './pages/Products'

  
  const icon = {
    className: "w-5 h-5 text-inherit",
  };
  
  export const routes = [
    {
      layout: "dashboard",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "Home",
          path: "/Home",
          element: <Home />,
        },
        {
            icon: <HomeIcon {...icon} />,
            name: "Products",
            path: "/Products",
            element: <Products />,
          },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "Customers",
          path: "/profile",
          element: <Profile />,
        },
        {
          icon: <TableCellsIcon {...icon} />,
          name: "tables",
          path: "/tables",
          element: <Tables />,
        },
      ],
    },
  ];
  
  export default routes;
  