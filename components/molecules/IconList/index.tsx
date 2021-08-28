import { Icon } from "@iconify/react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
interface IProps {
  icons: { icon: string; title: string; color: string }[];
}

const renderTooltip = (props: any, title: string) => (
  <Tooltip id={title} {...props}>{title}</Tooltip>
);

const IconList = ({ icons }: IProps) => {
  return (
    <div className="position-relative">
      {icons.map((icon, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          delay={{ show: 250, hide: 250 }}
          overlay={(props) => renderTooltip(props, icon.title)}
        >
          <Icon height={32} className="mx-2" icon={icon.icon} color={icon.color} />
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default IconList;
