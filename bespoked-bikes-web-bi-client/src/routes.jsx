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
  import Salespersons from './pages/Salesperson'
  import Customers from './pages/Customers'
  import Sales from './pages/Sales'


  
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
            icon: <HomeIcon {...icon} />,
            name: "Salespersons",
            path: "/Salespersons",
            element: <Salespersons />,
          },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "Customers",
          path: "/Customers",
          element: <Customers />,
        },
        {
          icon: <TableCellsIcon {...icon} />,
          name: "Sales",
          path: "/Sales",
          element: <Sales />,
        },
      ],
    },
  ];
  
  export default routes;
  