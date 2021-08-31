import { useMemo } from "react";
import Section from "../../../molecules/Section";
import Information from "../../../molecules/Information";

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
                Expected Graduation - Jun 2022 / Dec 2022 <br />
                Relevant Course - Java, Data Structure, Database, Matlab, Python
              </>
            }
          />
        </div>
      </div>
    </Section>
  );
};

export default Education;
