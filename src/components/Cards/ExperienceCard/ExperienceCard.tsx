import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#022c57", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="width-[60%] height-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>

        <p className="text-secondary text-[16px] font-semibold">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
