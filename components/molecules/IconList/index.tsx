import { Icon } from "@iconify/react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Image from 'next/image';

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
    <div className="d-flex flex-wrap align-items-center">
      {icons.map((icon, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          delay={{ show: 250, hide: 250 }}
          overlay={(props) => renderTooltip(props, icon.name)}
        >
          <div title={icon.name}>
            <Icon
              height={32}
              className="mx-2 mb-2"
              icon={icon.icon}
              color={icon.color}
            />
          </div>
        </OverlayTrigger>
      ))}
      {images?.map((image, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          delay={{ show: 250, hide: 250 }}
          overlay={(props) => renderTooltip(props, image.name)}
        >
          <div title={image.name}>
            <Image
              className="mx-2 mb-2"
              src={image.src}
              alt={image.name}
              height={32}
              width={32}
            />
          </div>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default IconList;
