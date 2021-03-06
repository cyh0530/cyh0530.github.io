import { useMemo } from "react";
import Section from "../../../molecules/Section";
import Information from "../../../molecules/Information";
import IconList from "@components/molecules/IconList";
import ICONS from "@constants/icons";

const Education = () => {
  const imageWidth = useMemo(() => 60, []);

  return (
    <Section id="education" bg="light" title="Education">
      <div className="timeline">
        <div className="timeline-container">
          <Information
            name="University of Washington"
            startDate="Sep 2018"
            endDate="Current"
            location="Seattle, WA"
            logo="static/images/logo/uw.png"
            logoWidth={imageWidth}
            logoHeight={(imageWidth * 2) / 3}
            title="B.S. Computer Science"
            description={
              <>
                <ul>
                  <li>Expected Graduation - Dec 2022 </li>
                  <li>
                    Relevant Course - Java, Data Structure, Database, Matlab,
                    Python
                  </li>
                  <li>Currently Taking - C, Security</li>
                  <li>
                    Planned Taking - Machine Learning, Algorithms, Networks,
                    OS, NLP
                  </li>
                </ul>
                <div className="ml-5 mb-4">
                  <IconList
                    icons={[ICONS.JAVA, ICONS.C, ICONS.PYTHON, ICONS.MATLAB, ICONS.BASH]}
                  />
                </div>
              </>
            }
          />
        </div>
      </div>
    </Section>
  );
};

export default Education;
