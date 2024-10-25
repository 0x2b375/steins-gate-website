import { ConfigProvider, Select } from "antd";
import { useContext } from "react";
import { WorldLineContext } from "../contexts/WorldLineContext";

const { Option } = Select;

const WorldLineSwitcher = () => {
  const { worldLine, setWorldLine } = useContext(WorldLineContext);

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            selectorBg: "transparent",
            colorBorder: "#fb923c",
            colorText: "#fb923c",
            colorTextPlaceholder: "#fb923c",
            colorIcon: "#fb923c",
            controlItemBgActive: "#fb923c",
            controlItemBgHover: "#fdba74",
            optionSelectedColor: "#000",
            optionSelectedBg: "#fb923c",
          },
        },
      }}
    >
      <div className='flex items-center'>
        <span className='text-white mr-2 text-sm font-steins'>World Line:</span>
        <Select
          value={worldLine}
          onChange={setWorldLine}
          style={{ width: 140 }}
          popupMatchSelectWidth={false}
        >
          <Option value='alpha'>Alpha</Option>
          <Option value='beta'>Beta</Option>
          <Option value='steins-gate'>Steins;Gate</Option>
        </Select>
      </div>
    </ConfigProvider>
  );
};

export default WorldLineSwitcher;
