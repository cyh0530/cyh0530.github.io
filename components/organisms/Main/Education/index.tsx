import { useMemo } from "react";
import Section from "../../../molecules/Section";
import Information from "../../../molecules/Information";
import uwLogo from "@images/logo/uw.png";

const Education = () => {
  const imageWidth = useMemo(() => 60, []);

  return (
    <Section id="education" bg="light" title="Education">
      <Information
        name="University of Washington"
        startDate="Sep 2018"
        endDate="Current"
        location="Seattle, WA"
        logo={uwLogo}
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
    </Section>
  );
};

export default Education;
