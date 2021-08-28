import { Icon } from "@iconify/react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
interface IProps {
  icons: { icon: string; name: string; color?: string }[];
  images?: { src: string; name: string }[];
}

const renderTooltip = (props: any, name: string) => (
  <Tooltip id={name} {...props}>
    {name}
  </Tooltip>
);

const IconList = ({ icons, images = [] }: IProps) => {

  return (
    <div className="">
      {icons.map((icon, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          delay={{ show: 250, hide: 250 }}
          overlay={(props) => renderTooltip(props, icon.name)}
        >
          <Icon
            height={32}
            className="mx-2 mb-2"
            icon={icon.icon}
            color={icon.color}
          />
        </OverlayTrigger>
      ))}
      {images?.map((image, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          delay={{ show: 250, hide: 250 }}
          overlay={(props) => renderTooltip(props, image.name)}
        >
          <img className="mx-2 mb-2" src={image.src} alt={image.name} height={32} />
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default IconList;
