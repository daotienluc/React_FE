import Bglaptopgaming from "./../../assets/img/component-bg-laptop.jpg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import classNames from "classnames";
import SlickSp from "./../frameworks/slickSp";

function Laptopgaming() {
  return (
    <div className="container py-10">
      <div className="relative">
        <img src={Bglaptopgaming} alt="" className="w-full rounded-lg" />
        <TabGroup className="absolute top-0 w-full">
          <TabList className="flex justify-between bg-white">
            <Tab
              className={({ selected }) =>
                classNames(
                  "px-10 font-bold h-14 w-64 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected
                    ? "bg-laptopgaming text-white"
                    : " text-black bg-white"
                )
              }
            >
              LAPTOP GAMING
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "px-10 font-bold h-14 w-64 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected
                    ? "bg-laptopgaming text-white"
                    : " text-black bg-white"
                )
              }
            >
              LAPTOP AI
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "px-10 font-bold h-14 w-64 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected
                    ? "bg-laptopgaming text-white"
                    : " text-black bg-white"
                )
              }
            >
              LAPTOP VĂN PHÒNG
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "px-10 font-bold h-14 w-64 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected
                    ? "bg-laptopgaming text-white"
                    : " text-black bg-white"
                )
              }
            >
              LAPTOP SINH VIÊN
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "px-10 font-bold h-14 w-64 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected
                    ? "bg-laptopgaming text-white"
                    : " text-black bg-white"
                )
              }
            >
              LAPTOP MỎNG NHẸ
            </Tab>
          </TabList>
          <TabPanels className=" absolute w-full">
            <TabPanel className="ml-64 mr-3">
              <div className="flex py-20 gap-3">
                <SlickSp />
              </div>
            </TabPanel>

            <TabPanel className="ml-64 mr-3">
              <div className="flex py-20 gap-3">{/* <SlickSp /> */}</div>
            </TabPanel>

            <TabPanel className="ml-64 mr-3">
              <div className="flex py-20 gap-3">{/* <SlickSp /> */}</div>
            </TabPanel>

            <TabPanel className="ml-64 mr-3">
              <div className="flex py-20 gap-3">{/* <SlickSp /> */}</div>
            </TabPanel>

            <TabPanel className="ml-64 mr-3">
              <div className="flex py-20 gap-3">{/* <SlickSp /> */}</div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

export default Laptopgaming;
