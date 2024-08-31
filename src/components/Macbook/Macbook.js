import bg_macbook from "./../../assets/img/bg_Macbook.jpg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import classNames from "classnames";
import SlickMacBookM3 from "./SlickMacBookM3";
import SlickMacBookM2 from "./SlickMacBookM2";
import SlickDealHot from "./SlickDealHot";

function Macbook() {
  return (
    <div className="container py-10">
      <div className="relative">
        <img src={bg_macbook} alt="" className="w-full rounded-lg" />
        <TabGroup className="absolute top-0 w-full">
          <TabList className="flex justify-between bg-white">
            <Tab
              className={({ selected }) =>
                classNames(
                  "font-bold h-14 w-4/12 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected ? "bg-black text-white" : " text-black bg-white"
                )
              }
            >
              Macbook M3 giảm thêm 300K
              <p className="text-xs line-clamp-3">
                tặng thêm Balo cho Macbook Air
              </p>
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "font-bold h-14 w-4/12 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected ? "bg-black text-white" : " text-black bg-white"
                )
              }
            >
              MacBook M2 giảm thêm 200K
              <p className="text-xs line-clamp-3">
                tặng thêm Balo cho MacBook Air
              </p>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "font-bold h-14 w-4/12 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected ? "bg-black text-white" : " text-black bg-white"
                )
              }
            >
              Deal HOT trong tuần
              <p className="text-xs line-clamp-3">Giảm đến 35%</p>
            </Tab>
          </TabList>
          <TabPanels className=" absolute w-full">
            <TabPanel className="ml-64 mr-3">
              <div className="flex py-12 gap-3">
                <SlickMacBookM3 />
              </div>
            </TabPanel>
            <TabPanel className="ml-64 mr-3">
              <div className="flex py-12 gap-3">
                <SlickMacBookM2 />
              </div>
            </TabPanel>
            <TabPanel className="ml-64 mr-3">
              <div className="flex py-12 gap-3">
                <SlickDealHot />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

export default Macbook;
